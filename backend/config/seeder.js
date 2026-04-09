import User from "../models/User.model.js";
import ENV from "./env.js";

/**
 * Automatically seeds the admin user from .env credentials.
 * This function should run once after the database connection is established.
 */
const seedAdmin = async () => {
    try {
        const adminEmail = ENV.ADMIN_EMAIL;
        const adminPassword = ENV.ADMIN_PASSWORD;

        console.log("Seeding process started. Email from ENV:", adminEmail);

        if (!adminEmail || !adminPassword) {
            console.warn("ADMIN_EMAIL or ADMIN_PASSWORD is not defined in .env. Admin seeding skipped.");
            return;
        }

        const user = await User.findOne({ email: adminEmail });

        if (user) {
            user.role = "admin";
            user.password = adminPassword;
            await user.save();
            console.log(`Admin user ${adminEmail} synchronized from .env`);
        } else {
            await User.create({
                email: adminEmail,
                password: adminPassword,
                role: "admin",
            });
            console.log(`Admin user ${adminEmail} created from .env`);
        }
    } catch (error) {
        console.error("Admin seeding error:", error.message, error.stack);
    }
};

export default seedAdmin;
