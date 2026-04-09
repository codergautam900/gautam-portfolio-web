import express from "express";
import cors from "cors";
import dns from "dns";
import connectDB from "./config/db.js";
import ENV from "./config/env.js";
import contactRouter from "./routes/contact.routes.js";
import profileRouter from "./routes/profile.routes.js";
import projectRouter from "./routes/project.routes.js";
import experienceRouter from "./routes/experience.routes.js";
import skillRouter from "./routes/skill.routes.js";
import aiRouter from "./routes/ai.routes.js";
import authRouter from "./routes/auth.routes.js";
import seedAdmin from "./config/seeder.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();
const PORT = Number(ENV.PORT) || 5000;
const NODE_ENV = ENV.NODE_ENV || "development";

if (NODE_ENV !== "production") {
    dns.setServers(["8.8.4.4", "8.8.8.8"]);
}

const defaultCorsOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:4173",
    "http://127.0.0.1:4173",
    "https://portfolio-built-by-gaurav.vercel.app",
    "https://my-portfolio-uac7.onrender.com",
];

const configuredOrigins = (ENV.CORS_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

const allowedOrigins = new Set(
    configuredOrigins.length > 0 ? configuredOrigins : defaultCorsOrigins,
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.has(origin)) {
            callback(null, true);
            return;
        }

        callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
}));

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Portfolio API is running",
        environment: NODE_ENV,
    });
});

app.use("/api", contactRouter);
app.use("/api/user", profileRouter);
app.use("/api/projects", projectRouter);
app.use("/api/experiences", experienceRouter);
app.use("/api/skills", skillRouter);
app.use("/api/ai", aiRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
});

app.use(errorMiddleware);

const startServer = async () => {
    try {
        await connectDB();
        await seedAdmin();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Server failed to start:", error.message);
        process.exit(1);
    }
};

startServer();
