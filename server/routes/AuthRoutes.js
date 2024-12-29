import { Router } from 'express';
import { addProfileImage, getUserInfo, login, signUp, updateUserInfo, deleteProfileImage, logOut } from '../controllers/AuthController.js';
import { verifyToken } from '../middlewares/AuthMiddleware.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads/profiles/' });

const authRoute = Router();

authRoute.post("/signup", signUp);
authRoute.post("/login", login);
authRoute.get("/user-info", verifyToken, getUserInfo);
authRoute.post("/update-user-info", verifyToken, updateUserInfo);
authRoute.post("/add-profile-image", verifyToken, upload.single('profile-image'), addProfileImage);
authRoute.delete("/delete-profile-image", verifyToken, deleteProfileImage);
authRoute.post("/logout", logOut);
// authRoute.get("/update-user-info",verifyToken, updateUserInfo);


export default authRoute;