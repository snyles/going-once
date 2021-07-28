const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {type: String},
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
})

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  address: {type: String},
  description: {type: String},
  lat: {type: Number},
  lng: {type: Number},
  city: {type: String},
  picture: {type: String},
  condition: {type: String},
  category: {type: String},
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [commentSchema]
}, {
  timestamps: true
});
module.exports = mongoose.model('Item', itemSchema);