const { v4: uuidv4 } = require('uuid');
const URL = require('../models/url.models.js');
const { asyncHandler } = require('../utils/asyncHandler.js');

const handleGenerateNewShortURL = asyncHandler(async (req, res) => {
    const {url} = req.body;
    console.log(url);
    if (!url) {
        return res.status(400).json({ message: 'URL is required' });
    }
    const uuid = uuidv4();
    await URL.create({
        shortId: uuid,
        redirectURL: url,
        visitHistory: []
    });
    return res.json({ id: uuid });
})

const handleGetAnalytics = asyncHandler(async function (req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}
)
module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics
}