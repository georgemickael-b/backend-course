const mongoose = require('mongoose');

function initDB() {
  mongoose.connect(
    'mongodb+srv://george1:Pass123@cluster0.zehn2.mongodb.net/crampetedb1?retryWrites=true&w=majority'
  );
}

module.exports = initDB;
