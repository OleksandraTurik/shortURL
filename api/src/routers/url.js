require('dotenv').config();
const express = require('express');
const shortId = require('shortid');
const validUrl = require('valid-url');
const Urls = require('../db/models/urls');

const router = express.Router();

router.post('/short', async (request, response) => {
  const { originUrl } = request.body;
  const base = process.env.BASE_URL;
  const urlId = shortId.generate();
  if (!validUrl.isUri(originUrl)) return response.status(401).json('invalid url');
  try {
    let url = await Urls.findOne({ originUrl });
    if (url) return response.json(url);
    const shortUrl = `${base}/${urlId}`;
    url = new Urls({
      originUrl,
      shortUrl,
      urlId,
    });
    await url.save();
    return response.json(url);
  } catch (error) {
    console.error(error);
    return response.status(500).json('Server Error');
  }
});

router.get('/validate', async (request, response) => {
  const { urlId } = request.query;

  try {
    const url = await Urls.findOne({ urlId });
    if (url) return response.json({ originUrl: url.originUrl });
    return response.status(404).json('Not Found');
  } catch (error) {
    console.error(error);
    return response.status(500).json('Server Error');
  }
});

module.exports = router;
