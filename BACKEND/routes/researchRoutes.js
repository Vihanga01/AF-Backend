import express from 'express';
import researchController from '../controllers/researchController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/').post(researchController.createResearch)
                 .get(researchController.getAllResearches)

router.route('/:id').get(researchController.getResearchByID)
                    .put(researchController.updateResearchDetails)
                    .delete(researchController.deleteResearchDetails)

router.route('/approve/:id').put(researchController.approveResearch)

router.route('/user/:id').get(researchController.getAllResearchesByUser)

export default router;