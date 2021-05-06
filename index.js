const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany()
  })
  .then(async () => {
    // Run your code here, after you have insured that the connection was made
    // ITERATION 2
    // const recipe = new Recipe({
    //   title: 'Tacos',
    //   level: 'Easy Peasy',
    //   ingredients: ['Tortilla', 'Carne', 'Salsa'],
    //   cuisine: 'Mexicana',
    //   dishType: 'dessert',
    //   duration: 30,
    //   creator: 'No Se'
    // })
    // await recipe.save()

    // ITERATION 3
    // Recipe.insertMany(data)
    //   .then(() => console.log("Data inserted"))
    //   .catch(err => console.error(err))

    // ITERATION 4
    // Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, { $set: { duration: 100 } }, { new: true })
    //   .then(recipe => console.log(recipe))
    //   .catch(error => console.error(error))

    // ITERATINO 5
    Recipe.deleteOne({ title: 'Carrot Cake' })
      .then(recipe => console.log(recipe))
      .catch(error => console.error(error))
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
