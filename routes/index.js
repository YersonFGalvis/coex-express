import express from 'express';
import controller from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', controller.index);

export default router;
