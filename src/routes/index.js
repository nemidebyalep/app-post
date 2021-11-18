const express = require('express');
const router = express.Router();
const user = require('../controllers/Users/routes');
const posts = require('../controllers/Posts/routes');
const app = express();

router.use('/', user);
router.use('/', posts);
module.exports = router;