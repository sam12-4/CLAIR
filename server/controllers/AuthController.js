import { compare } from 'bcrypt';
import User from '../models/UserModel.js';
import jwt from 'jsonwebtoken';
import {renameSync ,unlinkSync} from "fs"

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge });
};

export const signUp = async (request, response, next) => {
    try {
        console.log(request.body);
        const { email, password } = request.body;
        if (!email || !password) {
            return response.status(400).send("Email and Password are required");
        }
        const anyUser = await User.findOne({ email });
        if (anyUser) {
            return response.status(403).send("User already exists");
        }
        const user = await User.create({
            email, password
        });
        response.cookie("jwt", createToken(user.email, user.id), {
            maxAge,
            secure: true,
            sameSite: "None"
        });
        return response.status(201).json({
            user: {
                id: user.id,
                email: user.email,
                profileSetup: user.profileSetup
            }
        });
    } catch (err) {
        console.log(err);
        response.status(500).send("Internal server error");
    }
};



export const login = async (request, response, next) => {
    try{
        // console.log(request.body);
        const { email, password } = request.body;
        if (!email || !password) {
            return response.status(400).send("Email and Password are required");
        }
        const user = await User.findOne({
            email
        })
        console.log("user object", user);
        if (!user || user==null) {
            return response.status(404).send("User not found");
        }
        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return response.status(401).send("Invalid password");
        }
        response.cookie("jwt", createToken(user.email, user.id), {
            maxAge,
            secure: true,
            sameSite: "None"
        });
        return response.status(200).json({
            user: {
                id: user.id,
                email: user.email,
                profileSetup: user.profileSetup,
                firstName: user.firstName,
                lastName: user.lastName,
                image : user.image,
                colors: user.colors
            }
        });
    }catch(err){
        console.log(err);
        response.status(500).send("Internal server error");
    }
}

export const getUserInfo = async (request, response, next) => {
    try{
        console.log(request.userId);
        const userData = await User.findById(request.userId);
        console.log(userData);
        if (!userData) {
            return response.status(404).send("User not found");
        }
        return response.status(200).json({
            user: {
                id: userData.id,
                email: userData.email,
                profileSetup: userData.profileSetup,
                firstName: userData.firstName,
                lastName: userData.lastName,
                image : userData.image,
                colors: userData.colors
            }
        });
    }catch(err){
        console.log(err);
        response.status(500).send("Internal server error");
    }
}

export const updateUserInfo =async (request, response, next) => {
    try{
        console.log("api callled");
        console.log(request.userId);
        console.log(request.body);
        const {firstName, lastName, color} = request.body;
        const userData = await User.findByIdAndUpdate(request.userId, {
            firstName,
            lastName,
            colors: Number(color),
            profileSetup: true
        }, {new: true, runValidators: true})

        console.log("userdata",userData);

        return response.status(200).json({
            user: {
                id: userData.id,
                email: userData.email,
                profileSetup: userData.profileSetup,
                firstName: userData.firstName,
                lastName: userData.lastName,
                image : userData.image,
                colors: Number(userData.colors)
            }
        });
    }catch(err){
        console.log(err);
        response.status(500).send("Internal server error");
    }
}



export const addProfileImage =async (request, response, next) => {
    try{
        console.log("request",request);
        console.log("api callled");
        // console.log(request.userId);
        // console.log(request.body);
        // const {firstName, lastName, color} = request.body;
        // const userData = await User.findByIdAndUpdate(request.userId, {
        //     firstName,
        //     lastName,
        //     colors: Number(color),
        //     profileSetup: true
        // }, {new: true, runValidators: true})

        // console.log("userdata",userData);
        if (!request.file) {
            return response.status(400).send("Please upload an image");
        }
        const date = Date.now();
        let fileName = "uploads/profiles/" + date + request.file.originalname;
        renameSync(request.file.path, fileName);
        const updatedUser = await User.findByIdAndUpdate(
            request.userId,
            {image : fileName},
            {new: true, runValidators: true}
        )
        return response.status(200).json({
            image : updatedUser.image
        });
    }catch(err){
        console.log(err);
        response.status(500).send("Internal server error");
    }
}


export const deleteProfileImage =async (request, response, next) => {
    try{
        const {userId} = request;
        const user = await User.findById(userId);
        if (!user) {
            return response.status(404).send("User not found");
        }

        if (!user.image) {
            return response.status(400).send("No image found");
        }

        if (user.image) {
            unlinkSync(user.image);
        }

        user.image = null;
        await user.save();



        return response.status(200).send("Image deleted successfully");
    }catch(err){
        console.log(err);
        response.status(500).send("Internal server error");
    }
}

export const logOut = async (request, response, next) => {
    try{

        response.cookie("jwt", "", {maxAge: 1, secure: true, sameSite: "None"});
        response.status(200).send("Logged out successfully");
    }catch(err){
        console.log(err);
        response.status(500).send("Internal server error");
    }
}
