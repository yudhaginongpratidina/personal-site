import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /api:
 *  get:
 *      summary: API is running
 *      tags: [Root]
 *      responses:
 *          200:
 *              description: API is running
 */
router.get('/', (req, res) => {
    res.status(200).json('API is running...');
});

export default router;