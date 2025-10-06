const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, 'Product name is required'],
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    category: {
      type: String,
      default: 'General',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
