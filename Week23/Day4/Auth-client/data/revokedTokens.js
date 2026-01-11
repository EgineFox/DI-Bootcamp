let revokedTokens = new Set();

const revokeToken = (token) => {
    revokedTokens.add(token);
    console.log(`Token revoked. Total revoked: ${revokedTokens.size}`);
    
};

const isTokenRevoked = (token) => {
  return revokedTokens.has(token);
};

// Очистить отозванные токены (для тестирования)
const clearRevokedTokens = () => {
  revokedTokens.clear();
  console.log('All revoked tokens cleared');
};

const getRevokedTokensCount = () => {
  return revokedTokens.size;
};

const removeRevokedToken = (token) => {
  return revokedTokens.delete(token);
};

module.exports = {
  revokeToken,
  isTokenRevoked,
  clearRevokedTokens,
  getRevokedTokensCount,
  removeRevokedToken
};