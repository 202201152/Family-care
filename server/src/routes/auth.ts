import express from 'express';
import { googleSignIn } from '../controllers/authController';

const router = express.Router();

// POST /api/auth/google
router.post('/google', googleSignIn);

export default router;
