// import lib
import express from 'express';

// initiliaze router
const router = express.Router();

// define routes
router.get('/', (req, res) => {
    res.send('API is running...');
})

// export router
export default router;