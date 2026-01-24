import jwt from "jsonwebtoken"

// Generate access token (short-lived: 15 minutes)
export const generateAccessToken = (userId: number): string => {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables")
  }
  
  return jwt.sign({ userId }, secret, { expiresIn: "15m" })
}

// Generate refresh token (long-lived: 7 days)
export const generateRefreshToken = (userId: number): string => {
  const secret = process.env.REFRESH_SECRET
  if (!secret) {
    throw new Error("REFRESH_SECRET is not defined in environment variables")
  }
  
  return jwt.sign({ userId }, secret, { expiresIn: "7d" })
}

// Verify access token
export const verifyAccessToken = (token: string): any => {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error("JWT_SECRET is not defined")
  }
  
  return jwt.verify(token, secret)
}

// Verify refresh token
export const verifyRefreshToken = (token: string): any => {
  const secret = process.env.REFRESH_SECRET
  if (!secret) {
    throw new Error("REFRESH_SECRET is not defined")
  }
  
  return jwt.verify(token, secret)
}