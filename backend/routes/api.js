// import lib
import express from 'express';

// initiliaze router
const router = express.Router();

// import routes
import rootController from '../domain/root/root.controller.js';

// define routes
router.get('/', rootController);

// export router
export default router;