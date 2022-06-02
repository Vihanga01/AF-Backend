import express from 'express';
import requestController from '../controllers/requestController.js';

const router = express.Router();

router.route('/').post(requestController.createRequest)

router.route('/:id').delete(requestController.deleteRequest)

router.route('/user/:id').get(requestController.getRequestsByUserID)

export default router