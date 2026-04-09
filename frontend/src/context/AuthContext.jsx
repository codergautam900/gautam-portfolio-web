import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../services/api.js";

const AuthContext = createContext();
const BASE_URL = API_BASE_URL;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [loading, setLoading] = useState(true);

    // ── Check if user is logged in on mount ───────────────────────────────────
    useEffect(() => {
        const verifyUser = async () => {
            if (token) {
                try {
                    const res = await axios.get(`${BASE_URL}/api/auth/me`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setUser(res.data.user);
                } catch (err) {
                    console.error("Auth verification failed:", err);
                    localStorage.removeItem("token");
                    setToken(null);
                    setUser(null);
                }
            }
            setLoading(false);
        };
        verifyUser();
    }, [token]);

    // ── Login Function ────────────────────────────────────────────────────────
    const login = async (email, password) => {
        try {
            const res = await axios.post(`${BASE_URL}/api/auth/login`, { email, password });
            const { token, user } = res.data;

            localStorage.setItem("token", token);
            setToken(token);
            setUser(user);
            toast.success("Welcome back, Admin! 👋");
            return true;
        } catch (err) {
            toast.error(err.response?.data?.message || "Login failed");
            return false;
        }
    };

    // ── Logout Function ───────────────────────────────────────────────────────
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        toast.info("Logged out safely.");
    };

    const value = {
        user,
        token,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
