import jwt from "jsonwebtoken";

// generate access token 
export const generateAccessToken = (userId: number): string => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is not defined in environment variables")
    }

    return jwt.sign({ userId }, secret, { expiresIn: "1h" })

}

// generate refreshg token
export const generateRefreshToken = (userId: number): string => {
    const secret = process.env.REFRESH_SECRET;
    if (!secret) {
        throw new Error("Refresh token is not defined in environment variables")
    }

    return jwt.sign({ userId }, secret, { expiresIn: "7d" })
}

// verify access token
export const verifyAccessToken = (token: string) : any => {
    const secret = process.env.JWT_SECRET
    if (!secret) {
        throw new Error("JWT SECRET is not defined")
    }

    return jwt.verify(token, secret)
}


//verify refresh token
export const veryfyRefreshToken = (token: string) : any => {
    const secret = process.env.REFRESH_TOKEN;
    if (!secret) {
        throw new Error("Refresh token if not defined")
    }

    return jwt.verify(token, secret)
}