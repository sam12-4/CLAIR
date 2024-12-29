import mongoose from 'mongoose';
import { genSalt, hash } from 'bcrypt';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is not valid"]
    },
    password: {
        type: String,
        required: [true, "Password is not valid"]
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    colors: {
        type: Number,
        required: false
    },
    profileSetup: {
        type: Boolean,
        default: false
    }
});

UserSchema.pre("save", async function (next) {
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
    next();
});

const User = mongoose.model("Users", UserSchema);

export default User;