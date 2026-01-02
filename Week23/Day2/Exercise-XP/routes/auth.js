const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { addUser, findUserByUsername, findUserById, updateUser } = require('../data/users');
const authenticateToken = require('../middleware/authMiddleware');
const { validateRegister, validateLogin, validateUpdateProfile } = require('../validators/authValidation');

const { revokeToken, isTokenRevoked } = require('../data/revokedTokens');


// JWT Secret Key (only for example, in the real all holding in .env)
const JWT_SECRET = 'my_secret_key';
const JWT_EXPRESS_IN = '1h';
const REFRESH_TOKEN_EXPRESS_IN = '7d';

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
    const existingUser = findUserByUsername(username);
    if (existingUser) {
      return res.status(409).json({
        message: 'User already exists',
        errors: ['Username is already taken']
      });
    }

    // hasing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating user
    const newUser = {
      id: Date.now().toString(),
      username,
      password: hashedPassword,
      email: null,
      fullName: null,
      bio: null,
      avatar: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
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
      user: {
        id: newUser.id,
        username: newUser.username,
        createdAt: newUser.createdAt
      }
    });

  } catch (error) {
    console.error(' Registration error:', error);
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

    // Search of user
    const user = findUserByUsername(username);
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
      user: {
        id: user.id,
        username: user.username
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
router.get('/profile', authenticateToken, (req, res) => {
  try {
    const user = findUserById(req.user.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const { password, ...userWithoutPassword } = user;
    return res.json({
      message: 'Profile retrieved successfully',
      user: userWithoutPassword
    });

    } catch (error) {
    console.error('Get profile error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
});

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
    
    // check if user exists
    const user = findUserById(req.user.userId);
    
    if (!user) {
      return res.status(404).json({ 
        message: 'User not found' 
      });
    }
    
    // checking email is uniq
    if (value.email) {
      const users = getUsers();
      const emailExists = users.find(u => 
        u.email === value.email && u.id !== req.user.userId
      );
      
      if (emailExists) {
        return res.status(409).json({
          message: 'Email already in use',
          errors: ['This email is already associated with another account']
        });
      }
    }
    
    // refresh user
    const updatedUser = updateUser(req.user.userId, value);
    
    if (!updatedUser) {
      return res.status(500).json({ 
        message: 'Failed to update profile' 
      });
    }
    
   
    const { password, ...userWithoutPassword } = updatedUser;
    
    console.log('Profile updated successfully:', updatedUser.username);
    
    return res.json({
      message: 'Profile updated successfully',
      user: userWithoutPassword
    });
    
  } catch (error) {
    console.error('Update profile error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
});

// route for check authentication
router.get('/check-auth', authenticateToken, (req, res) => {
  res.json({
    authenticated: true,
    user: req.user,
  });
});

// Logout
router.post('/logout', authenticateToken, (req, res) => {
  console.log('=== LOGOUT ATTEMPT ===');
  console.log('User:', req.user.username);
   try {
 
    const refreshToken = req.cookies.refreshToken;
    
    if (refreshToken) {
     
      revokeToken(refreshToken);
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
router.post('/refresh', (req, res) => {
  console.log('=== TOKEN REFRESH ATTEMPT ===');
  
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ 
        message: 'Refresh token is required' 
      });
    }
    
   
    if (isTokenRevoked(refreshToken)) {
      console.log('Attempt to use revoked refresh token');
      return res.status(403).json({ 
        message: 'Refresh token has been revoked. Please login again.',
        code: 'TOKEN_REVOKED'
      });
    }

    jwt.verify(refreshToken, JWT_SECRET, (err, decoded) => {
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


module.exports = router;