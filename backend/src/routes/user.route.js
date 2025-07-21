import express from 'express';
import {
  followUser,
  getCurrentUser,
  getUserProfile,
  syncUser,
  updateProfile,
} from '../controllers/user.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public Routes
router.get('/profile/:username', getUserProfile);

// Protected Routes
router.post('/sync', protectRoute, syncUser);
router.get('/me', protectRoute, getCurrentUser);
router.put('/profile', protectRoute, updateProfile);
router.put('/follow/:targetUserId', protectRoute, followUser);

export default router;
