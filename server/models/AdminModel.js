import mongoose from 'mongoose';
import { genSalt, hash } from 'bcrypt';

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
});

// AdminSchema.pre("save", async function (next) {
//     const salt = await genSalt();
//     this.password = await hash(this.password, salt);
//     next();
// });

const Admin = mongoose.model("Admin", AdminSchema, "admin");

export default Admin;
