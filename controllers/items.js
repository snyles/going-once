const Item = require('../models/item');
module.exports = {
  index,
  findItemById,
  postItem,
  deleteItem,
  findItemsByCity,
};

function index(req, res) {
  try {
    Item.find({}).then(items => res.json(items))
  } catch (err) {
    res.status(400).json(err);
  }
}

function findItemsByCity(req,res) {
  const formatCity = req.params.city.replace('-',', ')
  try {
    Item.find({city: formatCity}).then(items => res.json(items))
  } catch (err) {
    res.status(400).json(err);
  }
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
    await item.save()
    .then((result) => res.json(result));
  } catch (err) {
    res.status(400).json(err);
  }
}

function deleteItem(req, res) {
  
}