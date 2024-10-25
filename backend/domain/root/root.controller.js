import express from 'express';
const router = express.Router();
import RootService from './root.service.js';

/**
 * @swagger
 * /api:
 *  get:
 *      summary: API is running
 *      tags: [Root]
 *      responses:
 *          200:
 *              description: Success
 */
router.get('/', async (req, res) => {
    try {
        const responses = await RootService.GetStatus();
        return res.status(200).json({ message: responses });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

export default router;