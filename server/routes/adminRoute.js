import { Router } from 'express';
import { adminLogin, getAdminDashboard } from '../controllers/AdminController.js';
import { verifyAdminToken } from '../middlewares/AuthMiddleware.js';

const adminRoute = Router();

adminRoute.post("/login", adminLogin);
adminRoute.get("/dashboard", verifyAdminToken, getAdminDashboard);
adminRoute.get("/admin-info", verifyAdminToken, getAdminDashboard);

export default adminRoute;
