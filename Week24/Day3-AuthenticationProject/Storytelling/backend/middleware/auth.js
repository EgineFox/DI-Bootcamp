import { verifyToken } from "../helpers/jwt";

// Middleware to authenticate user using JWT 
export function authenticateToken(req, res, next) {
    try {
        // Get token from Authorization header
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Access token required',
            });
        }

        // Verify token
        const decoded = verifyToken(token);

        //Add user info to request object
        req.user = {
            userId: decoded.userId,
            username: decoded.username,
        };

        // Continue to next middleware/controller
        next();

    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message
        });
    }
}