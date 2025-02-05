const express = require('express');
const { classifyNumber } = require('../controllers/classifyController');

const router = express.Router();

// Route: /api/classify-number?number=<number>
router.get('/classify-number', classifyNumber);

module.exports = router;
