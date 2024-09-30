const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

// Middleware to authenticate user
const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;

    // Check for token in the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(token, "vtalix"); // Ensure you have JWT_SECRET in your .env file

            // Get user from the decoded token
            req.user = await User.findById(decoded.id).select("-password"); 
            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            res.status(401);
            console.log("error is ", error);
            throw new Error("Token expired");
        }
    } else {
        res.status(401);
        throw new Error("Session expired, please login again");
    }
});

module.exports = authMiddleware;
