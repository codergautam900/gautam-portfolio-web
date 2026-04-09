import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import ENV from "../config/env.js";

// ─── Helper: Generate JWT ──────────────────────────────────────────────────
const generateToken = (id) => {
    return jwt.sign({ id }, ENV.SECRET_TOKEN_KEY, {
        expiresIn: "30d",
    });
};

// ─── LOGIN ─────────────────────────────────────────────────────────────────
// POST /api/auth/login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).select("+password");

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            message: "Server error during login",
        });
    }
};

// ─── GET ME ────────────────────────────────────────────────────────────────
// GET /api/auth/me
// (Protected)
const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch user data",
        });
    }
};

// ─── INITIALIZE ADMIN ──────────────────────────────────────────────────────
// Used to create the first admin based on .env
const initAdmin = async (req, res) => {
    try {
        const adminCount = await User.countDocuments({ role: "admin" });
        if (adminCount > 0) {
            return res.status(400).json({
                success: false,
                message: "Admin already exists",
            });
        }

        const email = ENV.ADMIN_EMAIL;
        const password = ENV.ADMIN_PASSWORD;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "ADMIN_EMAIL and ADMIN_PASSWORD must be configured before admin initialization.",
            });
        }

        const admin = await User.create({
            email,
            password,
            role: "admin",
        });

        res.status(201).json({
            success: true,
            message: "Admin initialized successfully",
            admin: { email: admin.email },
        });
    } catch (error) {
        console.error("InitAdmin error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to initialize admin",
            ...(ENV.NODE_ENV !== "production" && { details: error.message }),
        });
    }
};

export { login, getMe, initAdmin };
