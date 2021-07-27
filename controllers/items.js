const Item = require('../models/item');

module.exports = {
  index,
  findItemById,
  findItemsByCity,
  postItem,
  deleteItem,
  addOrRemoveFavorite,
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
  Item.find({city: formatCity})
    .then(items => res.json(items))
    .catch(err => res.status(400).json(err));
}

function findItemById(req, res) {
  console.log(req.params.id)
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json(err))
}

function postItem(req, res) {
  const item = new Item(req.body);
  try {
    item.save()
    .then((result) => res.json(result));
  } catch (err) {
    res.status(400).json(err);
  }
}

function deleteItem(req, res) {
  Item.findByIdAndDelete(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json(err))
}


async function addOrRemoveFavorite(req, res) {
  const item = await Item.findById(req.params.id)
  const favoriteIdx = item.favoritedBy.indexOf(req.user._id)  
  favoriteIdx !== -1 ? 
    item.favoritedBy.splice(favoriteIdx, 1)
    : 
    item.favoritedBy.push(req.user._id);
  await item.save()
  return res.json(item)
}