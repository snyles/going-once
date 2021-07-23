const Item = require('../models/item');
module.exports = {
  index,
  findItemById,
  postItem,
  deleteItem,
};

function index(req, res) {
  Item.find({}).then(items => res.json(items))
}
// function tagIndex(req, res) {
//     Item.find({ tag: req.tag }).then(items => res.json(items))
// }

function findItemById(req, res) {
    Item.findById(req.params.id).then(item => res.json(item))
}

async function postItem(req, res) {
  const item = new Item(req.body);
  try {
    await item.save();
    res.json({ item });
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

function deleteItem(req, res) {
  
}