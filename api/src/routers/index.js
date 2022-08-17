const { Router } = require('express');
const Urls = require('../db/models/urls');

const router = Router();
router.get('/:urlId', async (request, response) => {
  try {
    const url = await Urls.findOne({ urlId: request.params.urlId });
    if (url) {
      url.clicks += 1;
      url.save();
      response.redirect(url.originUrl);
    } else {
      response.status(404).json('Not Found');
    }
  } catch (error) {
    console.log(error);
    response.status(500).json('Server Error');
  }
});

module.exports = router;
