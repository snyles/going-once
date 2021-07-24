const express = require('express');
const router = express.Router();
const itemCtrl = require('../controllers/items');

/*---------- Public Routes ----------*/
router.get("/feed", itemCtrl.index)
router.get("/feed/:id", itemCtrl.findItemById)

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post("/post-item", checkAuth, itemCtrl.postItem)

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;