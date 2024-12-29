import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoute from './routes/AuthRoutes.js';
import adminRoute from './routes/adminRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5005;
const database_url = process.env.DATABASE_URL;
const origin = process.env.ORIGIN;
app.use("/uploads/profiles", express.static("uploads/profiles"));

app.use(express.json());
app.use(cookieParser());
// console.log(origin);

app.use(cors({
    origin: origin,
    credentials: true
}));


app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);


mongoose.connect(database_url).then(() => {
    console.log("Database connection successful");
}).catch((err) => {
    console.log(err);
});

// app.get("/", (req, res) => {
//     res.send({
//         name: "Sameer"
//     });
// });

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});