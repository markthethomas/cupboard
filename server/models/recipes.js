var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  author: String,
  accommodations: Array,
  cost: [{totalCost: Number, plainEnglishTotalCost: String}],
  dateCreated: { type: Date, default: Date.now },
  generalType: Array,
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
  mealOfDayType: String,
  meta: {
    likes: Number,
    favorites: Number,
    categories: [{name: String}],
    keywords: Array
  },
  rating: Number,
  season: String,
  share: {
    publicURI: String
  },
  servings: Number,
  steps: [{stepIndex: Number, stepDescription: String}],
  summary: String,
  tags: Array,
  totalPrepTime: [{active: Number, inactive: Number}],
});


var Recipe = mongoose.model('Recipe', recipeSchema);
