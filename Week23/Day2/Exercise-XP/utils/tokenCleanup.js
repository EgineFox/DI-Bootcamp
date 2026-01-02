const jwt = require('jsonwebtoken');
const { removeRevokedToken } = require('../data/revokedTokens');

const JWT_SECRET = 'my-secret-key-change-this-in-production';

const isTokenExpired = (token) => {
  try {
    jwt.verify(token, JWT_SECRET);
    return false; // Токен валиден
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return true; // Токен истёк
    }
    return false;
  }
};


const cleanupExpiredTokens = (revokedTokensSet) => {
  let cleanedCount = 0;
  
  for (const token of revokedTokensSet) {
    if (isTokenExpired(token)) {
      removeRevokedToken(token);
      cleanedCount++;
    }
  }
  
  if (cleanedCount > 0) {
    console.log(`Cleaned up ${cleanedCount} expired tokens from blacklist`);
  }
  
  return cleanedCount;
};

const startTokenCleanupSchedule = (intervalMinutes = 60) => {
  const intervalMs = intervalMinutes * 60 * 1000;
  
  setInterval(() => {
    console.log('Running scheduled token cleanup...');
    const { revokedTokens } = require('../data/revokedTokens');
    cleanupExpiredTokens(revokedTokens);
  }, intervalMs);
  
  console.log(`Token cleanup scheduled every ${intervalMinutes} minutes`);
};

module.exports = {
  isTokenExpired,
  cleanupExpiredTokens,
  startTokenCleanupSchedule
};