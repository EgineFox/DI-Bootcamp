const jwt = require('jsonwebtoken');

const JWT_SECRET = 'my_secret_key';

const authenticateToken = ( req, res, next ) => {
  try {
    // get token from cookies
    const token = req.cookies.accessToken;

    if (!token) {
      return res.status(401).json({ message: 'Access token is required'});
    }

    // checking token
    jwt.verify( token, JWT_SECRET, ( err, decoded) => {
      if (err) {
        return res.status(403).json({ message: ' Invalid or expired token'});
      }

      // add the claim to the request
      req.user = decoded;
      next();
    });

  } catch (error) {
    console.error('Authentication error:' , error);
    res.status(500).json({ message: 'Internal server error'});
  }
};

module.exports = authenticateToken;