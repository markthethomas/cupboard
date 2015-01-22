var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {

  var Schema = mongoose.Schema;

  var recipeSchema = new Schema({
    cost: [{totalCost: Number, plainEnglishTotalCost: String}],
    ingredients: [{
      ingredientName: String,
      ingredientAmount: [{
        metric: Boolean,
        metricAmount: {
          amount: Number,
          unit: String
        },
        imeprial: Boolean,
        imperialAmount: {
          amount: Number,
          unit: String
        },
        cost: Number
      }]
    }],
    image: {
      imageURI: String,
      sizes: [{dimension: String, uri: String}]
    },
    meal: {
      mealOfDayType: String,
      cuisineType: Array,
      season: String,
    },
    meta: {
      accommodations: [{type: String, notes: String}],
      author: String,
      categories: [{name: String}],
      dateCreated: { type: Date, default: Date.now },
      favorites: Number,
      keywords: Array,
      likes: Number,
      rating: Number,
      summary: String,
      tags: Array,
    },
    yield: {
      servings: Number, default: 1,
      shelfLife: {
        refrigerate: Boolean,
        lifespan: Number
      }
    },
    share: {
      publicURI: String
    },
    steps: [{stepIndex: Number, stepDescription: String}],
    totalPrepTime: [{active: Number, inactive: Number}],
  });


  module.exports = mongoose.model('Recipe', recipeSchema);
});
