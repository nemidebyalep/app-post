const express = require('express');
const router = express.Router();
const postsController = require('./controller');
const { verifyToken } = require('../../middleware/authorization');


router.post('/posts', postsController.insert)
router.get('/postslistar', postsController.readAll)
router.get('/posts/:id', postsController.readFindById)
router.delete('/posts/:id', postsController.delete)
router.put('/posts/:id', postsController.update)

module.exports = router;