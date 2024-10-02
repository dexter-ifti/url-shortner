const express = require('express');
const cors = require('cors');
const urlRouter = require('./routes/url.route.js');
const URL = require('./models/url.models.js');
const app = express();

app.use(cors({
    origin: 'process.env.CORS_ORIGIN',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/v1/url', urlRouter);
app.get('/api/v1/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },
        {
            $push: {
                visitHistory: { timestamp: Date.now() }
            }
        }
    );
    res.redirect(entry.redirectUrl);
})
module.exports = app;