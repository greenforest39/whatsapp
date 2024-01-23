const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    date: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('blog', BlogSchema);
