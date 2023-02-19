const router = require('express').Router();
const { restaurants } = require('./mock');
const { reply } = require('./utils');

router.get('/restaurants', (req, res) => {
  reply(res, restaurants);
});

router.post('/order', function (req, res) {
  return reply(res, 'ok', 3000);
});

module.exports = router;
