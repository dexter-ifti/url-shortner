const express = require('express')
const {handleGenerateNewShortURL, handleGetAnalytics} = require('../controllers/url.controller.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});
router.post('/', handleGenerateNewShortURL);

router.get('/analytics/:shortId', handleGetAnalytics);


module.exports =  router
