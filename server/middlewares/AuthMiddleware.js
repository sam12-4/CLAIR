// import jwt from "jsonwebtoken";

// export const verifyToken = async (request, response, next) => {
//     console.log(request);
//     const token = request.cookies.jwt;
//     console.log({token});
//     // console.log(request);
//     if (!token) {
//         return response.status(401).send("User is Unauthorized");
//     }
//     if (!process.env.JWT_KEY) {
//         return response.status(500).send("JWT key is missing or invalid");
//     }
//     jwt.verify(token, process.env.JWT_KEY, (err, payload) =>{
//         if (err) return response.status(403).send("Token is invalid");
//         request.userId = payload.userId;
//         next();
//     })
// }


// export const verifyAdminToken = async (req, res, next) => {
//     const token = req.cookies.admin_jwt;
//     if (!token) return res.status(401).send("Unauthorized Admin");

//     jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
//         if (err) return res.status(403).send("Invalid Admin Token");
//         req.adminId = payload.adminId;
//         next();
//     });
// };


import jwt from 'jsonwebtoken';

export const verifyToken = async (request, response, next) => {
    const token = request.cookies.jwt;
    if (!token) {
        return response.status(401).send("User is Unauthorized");
    }
    if (!process.env.JWT_KEY) {
        return response.status(500).send("JWT key is missing or invalid");
    }
    jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
        if (err) return response.status(403).send("Token is invalid");
        request.userId = payload.userId;
        next();
    });
};

export const verifyAdminToken = async (req, res, next) => {
    const token = req.cookies.admin_jwt;
    if (!token) return res.status(401).send("Unauthorized Admin");

    jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
        if (err) return res.status(403).send("Invalid Admin Token");
        req.adminId = payload.adminId;
        next();
    });
};