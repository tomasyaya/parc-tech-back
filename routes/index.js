const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  console.log('hit the route')
});

module.exports = router;
