import express from 'express';
import controller from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', controller.index);
router.get('/show/:id', controller.show);
router.post('/create', controller.store);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

export default router;
