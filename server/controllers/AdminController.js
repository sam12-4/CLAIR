import Admin from '../models/AdminModel.js';
import jwt from 'jsonwebtoken';
import { compare } from 'bcrypt';

const adminTokenMaxAge = 3 * 24 * 60 * 60 * 1000;

const createAdminToken = (adminId) => {
    return jwt.sign({ adminId }, process.env.JWT_KEY, { expiresIn: adminTokenMaxAge });
};

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('email', email);
        if (!email || !password) {
            return res.status(400).send("Email and Password are required");
        }
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).send("Admin not found");
        }
        // console.log('admin password', admin.password);
        // console.log('password', password);
        const isMatch = password == admin.password;
        // console.log('isMatch', isMatch);
        if (!isMatch) {
            return res.status(401).send("Invalid password");
        }

        res.cookie("admin_jwt", createAdminToken(admin.id), {
            maxAge: adminTokenMaxAge,
            secure: true,
            sameSite: "None",
        });

        return res.status(200).json({
            admin: {
                id: admin.id,
                email: admin.email,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

export const getAdminDashboard = (req, res) => {
    return res.status(200).send("Welcome to the Admin Dashboard!");
};
