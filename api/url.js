require('dotenv').config();
const express = require('express');
const shortId = require('shortid');
const validUrl = require('valid-url');
const Urls = require('./schemas/urls');

const router = express.Router();

router.post('/short', async (request, response) => {
  const { originUrl } = request.body;
  const base = process.env.BASE_URL;
  const urlId = shortId.generate();
  if (validUrl.isUri(originUrl)) {
    try {
      let url = await Urls.findOne({ originUrl });
      if (url) {
        response.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;
        url = new Urls({
          originUrl,
          shortUrl,
          urlId,
          date: new Date(),
        });
        await url.save();
        response.json(url);
      }
    } catch (error) {
      console.log(error);
      response.status(500).json('Server Error');
    }
  } else {
    response.status(401).json('invalid url');
  }
});

router.post('/validate', async (request, response) => {
  const { shortUrl } = request.body;

  try {
    const url = await Urls.findOne({ shortUrl });
    if (url) {
      response.json({ originUrl: url.originUrl });
    } else {
      response.status(404).json('Not Found');
    }
  } catch (error) {
    console.log(error);
    response.status(500).json('Server Error');
  }
});

module.exports = router;
