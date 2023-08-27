const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were Fetched' 
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Orders was Created' 
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders was Created' 
    });
});

module.exports = router;