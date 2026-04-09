import dotenv from "dotenv";
dotenv.config({ quiet: true });

const ENV_URI = {
    PORT: process.env.PORT || "5000",
    NODE_ENV: process.env.NODE_ENV || "development",
    MONGODB_URL: process.env.MONGODB_URL,
    MY_EMAIL: process.env.MY_EMAIL,
    MY_PASSWORD: process.env.MY_PASSWORD,
    SECRET_TOKEN_KEY: process.env.SECRET_TOKEN_KEY,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || process.env.MY_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || process.env.MY_PASSWORD,
    CORS_ORIGINS: process.env.CORS_ORIGINS,
};

const loadedKeys = Object.entries(ENV_URI)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key);

console.log("ENV loaded:", loadedKeys.join(", ") || "none");

export default ENV_URI;
