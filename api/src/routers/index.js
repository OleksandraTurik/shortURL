const { Router } = require('express');
const Urls = require('../db/models/urls');

const router = Router();
router.get('/:urlId', async (request, response) => {
  try {
    const url = await Urls.findOne({ urlId: request.params.urlId });
    if (!url) return response.status(404).json('Not Found');
    url.clicks += 1;
    url.save();
    return response.redirect(url.originUrl);
  } catch (error) {
    console.error(error);
    return response.status(500).json('Server Error');
  }
});

module.exports = router;
