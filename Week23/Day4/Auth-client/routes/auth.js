const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Models
const User = require('../models/User');
const RevokedToken = require('../models/RevokedToken');

// Middleware
const autenticateToken = require('../middleware/authMiddleware');

const { validateRegister, validateLogin, validateUpdateProfile } = require('../validators/authValidation');

// JWT Secret Key (in .env)
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN ||'7d';

// Registration
router.post('/register', async (req, res) => {
  console.log('=== REGISTER ATTEMPT ===');
  console.log('Body:', req.body);

  try {
    const { error, value } = validateRegister(req.body);
    // validation
    if (error) {
      const errorMessage = error.details.map(detail => detail.message);
      return res.status(400).json({
        message: 'Validation failed',
        errors: errorMessage
      });
    }
    const { username, password } = value;

    // checking if the user exists
    const existingUser = await User.findUserByUsername(username);
    if (existingUser) {
      return res.status(409).json({
        message: 'User already exists',
        errors: ['Username is already taken']
      });
    }

    // hasing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating user
    const newUser = await User.create({
      username,
      password: hashedPassword,
    })
    

    // generate tokens
    const accessToken = jwt.sign(
      { userId: newUser.id, username: newUser.username },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    const refreshToken = jwt.sign(
      { userId: newUser.id },
      JWT_SECRET,
      { expiresIn: REFRESH_TOKEN_EXPIRES_IN }
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

    console.log('User registered successfully:', username);

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        username: newUser.username,
        createdAt: newUser.createdAt
      }
    });

  } catch (error) {
    console.error(' Registration error:', error);
    if (error.code === '23505') {
      return res.status(409).json({
        message: 'User already exists',
        errors: ['Username is already taken']
      });
    }

    return res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
})

// Login

router.post('/login', async (req, res) => {
  console.log('=== LOGIN ATTEMPT ===');
  console.log('Body:', req.body);
  try {
    const { error, value } = validateLogin(req.body);

    // Validation
    if (error) {
      const errorMessages = error.details.map(detail => detail.message);
      return res.status(400).json({
        message: 'Validation failed',
        errors: errorMessages
      });
    }

    const { username, password } = value;
    console.log('Looking for user:', username);

    // Search of user in DB
    const user =  await User.findByUsername(username);
    if (!user) {
      return res.status(401).json({
        message: 'Invalid credentials',
        errors: ['Username or password is incorrect']
      });
    }

    console.log('Comparing passwords...');
    // cheking password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: 'Invalid credentials',
        errors: ['Username or password is incorrect']
      });
    }

    console.log('Generating tokens...');
    // generate tokens
    const accessToken = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    const refreshToken = jwt.sign(
      { userId: user.Id },
      JWT_SECRET,
      { expiresIn: REFRESH_TOKEN_EXPIRES_IN },
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

    console.log('Login successful:', username);

    return res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
});

// secure route - profile of user
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    delete user.password;

    return res.json({
      message: 'Profile retrieved successfully',
      user: user
    });

    } catch (error) {
    console.error('Get profile error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
});

//refresh profile

router.put('/profile', authenticateToken, async (req, res) => {
  console.log('=== UPDATE PROFILE ATTEMPT ===');
  console.log('User ID:', req.user.userId);
  console.log('Update data:', req.body);
  
  try {
    // validation
    const { error, value } = validateUpdateProfile(req.body);
    
    if (error) {
      const errorMessages = error.details.map(detail => detail.message);
      return res.status(400).json({
        message: 'Validation failed',
        errors: errorMessages
      });
    }

    // chuck for dubles email
    if (value.email) {
      const existingEmail = await User.findByEmail(value.email);

      if (existingEmail && existingEmail.id !== req.user.userId) {
        return res.status(409).json({
          message: 'Email already in use',
          errors: ['This email is already associated with another account']
        });
      }
    }
       
    // refresh user
    const updatedUser = await User.update(req.user.userId, value);
    
    if (!updatedUser) {
      return res.status(404).json({ 
        message: 'User not found' 
      });
    }
    
    delete updatedUser.password;
   
    console.log('Profile updated successfully:', updatedUser.username);
    
    return res.json({
      message: 'Profile updated successfully',
      user: userWithoutPassword
    });
    
  } catch (error) {
    console.error('Update profile error:', error);

    if (error.code === '23505') {
      return res.status(409).json({
        message: 'Email already in use',
        errors: ['This email is already associated with another account']
      });
    }
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
});

// route for check authentication
router.get('/check-auth', authenticateToken, (req, res) => {
  return res.json({
    authenticated: true,
    user: req.user,
  });
});

// Logout
router.post('/logout', authenticateToken, async (req, res) => {
  console.log('=== LOGOUT ATTEMPT ===');
  console.log('User:', req.user.username);
   try {
 
    const refreshToken = req.cookies.refreshToken;
    
    if (refreshToken) {
     
      await RevokedToken.revoke(refreshToken, register.user.userId);
      console.log('Refresh token revoked for user:', req.user.username);
    }
    
    
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    
    console.log('Logout successful for user:', req.user.username);
    
    return res.json({ 
      message: 'Logged out successfully',
      note: 'Refresh token has been invalidated'
    });
    
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
});

// refresh token
router.post('/refresh', async (req, res) => {
  console.log('=== TOKEN REFRESH ATTEMPT ===');
  
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ 
        message: 'Refresh token is required' 
      });
    }
    
   const isRevoked = await RevokedToken.isRevoked(refreshToken);

    if (isRevoked) {
      console.log('Attempt to use revoked refresh token');
      return res.status(403).json({ 
        message: 'Refresh token has been revoked. Please login again.',
        code: 'TOKEN_REVOKED'
      });
    }

    jwt.verify(refreshToken, JWT_SECRET, async (err, decoded) => {
      if (err) {
        console.log('Invalid or expired refresh token');
        return res.status(403).json({ 
          message: 'Invalid or expired refresh token. Please login again.',
          code: 'TOKEN_INVALID'
        });
      }

      const newAccessToken = jwt.sign(
        { userId: decoded.userId },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );

      res.cookie('accessToken', newAccessToken, {
        httpOnly: true,
        maxAge: 3600000
      });

      console.log('Access token refreshed successfully');

      return res.json({ 
        message: 'Token refreshed successfully' 
      });
    });

  } catch (error) {
    console.error('Refresh token error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
});

/**Statistics revored tokens for admins */
router.get('/admin/revoked-tokens/stats', autenticateToken, async (req, res) => {
  try {
    const stats = await RevokedToken.getStats();

    return res.json({
      message: 'Revoked tokens statistics',
      stats: stats,
      note: 'In production, protect this!!!'
    });

  } catch (error) {
    console.error('Stats error: ', error);
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
});

/** Cleaning expired tokens */
router.post('/admin/revoked-tokens/cleanup', autenticateToken, async (req, res) => {
  try{ 
    const cleanedCount = await RevokedToken.cleanupExpired();

    return res.json({
      message: 'Expired tokens cleaned up',
      cleanedCount: cleanedCount
    });

  } catch (error) {
    console.error('Cleanup error:' , error);
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
    
  }
})


module.exports = router;