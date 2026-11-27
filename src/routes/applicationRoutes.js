import { Router } from 'express';
import { celebrate } from 'celebrate';
import { bodySchema } from '../validations/appValidation.js';
import { createApplication } from '../controllers/applicationController.js';

const router = Router();

router.post('/applications', celebrate(bodySchema), createApplication);

export default router;
