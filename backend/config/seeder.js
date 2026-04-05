import User from "../models/User.model.js";
import ENV from "./env.js";

/**
 * Automatically seeds the admin user from .env credentials
 * This function should run once after the database connection is established.
 */
const seedAdmin = async () => {
    try {
        const adminEmail = ENV.MY_EMAIL;
        const adminPassword = ENV.ADMIN_PASSWORD;

        console.log("Seeding process started. Email from ENV:", adminEmail);

        if (!adminEmail || !adminPassword) {
            console.warn("⚠️ MY_EMAIL or ADMIN_PASSWORD is not defined in .env. Admin seeding skipped.");
            return;
        }

        // Check if ANY admin already exists
        const adminCount = await User.countDocuments({ role: "admin" });
        
        // Check if the user with this email exists
        let user = await User.findOne({ email: adminEmail });

        if (user) {
            // Update existing user's password and ensure they are admin
            user.role = "admin";
            user.password = adminPassword; // Pre-save hook will hash this if different
            await user.save();
            console.log(`✅ Admin user ${adminEmail} synchronized from .env`);
        } else {
            // Create new admin user
            await User.create({
                email: adminEmail,
                password: adminPassword,
                role: "admin",
            });
            console.log(`✅ Admin user ${adminEmail} created from .env`);
        }
    } catch (error) {
        console.error("❌ Admin Seeding Error:", error.message, error.stack);
    }
};

export default seedAdmin;
