import express  from "express";
import studentGroupController from "../controllers/studentGroupController.js";

const router = express.Router();

router.route('/').post(studentGroupController.createStudentGroup)

router.route('/:id').get(studentGroupController.getStudentGroupByID)

router.route('/registerTopic/:id').put(studentGroupController.registerTopic)

router.route('/supervisorApproves/:id').put(studentGroupController.supervisorApproves)

router.route('/co_supervisorApproves/:id').put(studentGroupController.co_supervisorApproves)

router.route('/panelApproves/:id').put(studentGroupController.panelApproves)

export default router;


