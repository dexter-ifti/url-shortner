const express = require('express');
const cors = require('cors');
const urlRouter = require('./routes/url.route.js');

const app = express();

app.use(cors({
    origin: 'process.env.CORS_ORIGIN',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/v1/url', urlRouter);
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shoortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },
        {
            $push: {
                visitHistory: { timestamp: Date.now() }
            }
        }
    );
    res.redirect(entry.redirectURL);
})
module.exports = app;