const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { addUser, findUserByUsername } = require('../data/users');
const authenticateToken = require('../middleware/authMiddleware');

// JWT Secret Key (only for example, in the real all holding in .env)
const JWT_SECRET = 'my_secret_key';
const JWT_EXPRESS_IN = '1h';
const REFRESH_TOKEN_EXPRESS_IN = '7d';

// Registration
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    // validation
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    if (password.lenght < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 chareacters' });
    }

    // checking if the user exists
    const existingUser = findUserByUsername(username);
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // hasing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating user
    const newUser = {
      id: Date.now().toString(),
      username,
      password: hashedPassword
    };

    addUser(newUser);

    // generate tokens
    const accessToken = jwt.sign(
      { userId: newUser.id, username: newUser.username },
      JWT_SECRET,
      { expiresIn: JWT_EXPRESS_IN }
    );

    const refreshToken = jwt.sign(
      { userId: newUser.id },
      JWT_SECRET,
      { expiresIn: REFRESH_TOKEN_EXPRESS_IN }
    );

    // install tokens to cookies
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 3600000 // 1 hour
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: { id: newUser.id, username: newUser.username }
    });

  } catch (error) {
    console.error(' Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

// Login

router.post('/login', async (req, res) => {
  console.log('=== LOGIN ATTEMPT ===');
  console.log('Body:', req.body);
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
    console.log('Looking for user:', username);

    // Search of user
    const user = findUserByUsername(username);
    console.log('User found:', user ? 'YES' : 'NO');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    console.log('Comparing passwords...');
    // cheking password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Password valid:', isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    console.log('Generating tokens...');
    // generate tokens
    const accessToken = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: JWT_EXPRESS_IN }
    );

    const refreshToken = jwt.sign(
      { userId: user.Id },
      JWT_SECRET,
      { expiresIn: REFRESH_TOKEN_EXPRESS_IN },
    );
    console.log('Setting cookies...');

    // install tokens to the cookies
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 3600000
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 7 * 26 * 60 * 60 * 1000
    });


    console.log('Sending response...');
    return res.json({
      message: 'Login successful',
      user: { id: user.id, username: user.username }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// secure route - profile of user
router.get('/profile', authenticateToken, (req, res) => {
  res.json({
    message: 'This is protected route',
    user: req.user
  });
});

// route for check authentication
router.get('/check-auth', authenticateToken, (req, res) => {
  res.json({
    authenticated: true,
    user: req.user,
  });
});

// Logout
router.post('/logout', (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.json({ message: 'Logged out successfully' });
});

// refresh token
router.post('/refresh', (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: 'Refresh token is required' });
    }

    jwt.verify(refreshToken, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid refresh token' });
      }
      // generate new access token
      const newAccessToken = jwt.sign(
        { userId: decoded.userId },
        JWT_SECRET,
        { expiresIn: JWT_EXPRESS_IN }
      );

      res.cookie('accessToken', newAccessToken, {
        httpOnly: true,
        maxAge: 3600000
      });

      res.json({ massage: 'Token refresh successfully' });
    });
  } catch (error) {
    console.error('Refresh token error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;