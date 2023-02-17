const router = require('express').Router();
const { restaurants } = require('./mock');
const { reply } = require('./utils');

router.get('/restaurants', (req, res) => {
  reply(res, restaurants);
});

module.exports = router;
