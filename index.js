const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log('Connection open.')
})
.catch(err => {
    console.log(`${err}`)
})


// {
//     title: 'Amadeus',
//     year: 1986,
//     score: 9.2,
//     rating: 'R'
// }

// Each key is going to be set to some type (like String). The keys defined here will also be used to set the 'keys' in my Mongo document, so we want to give specific names that we'll use later on. 

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

// Take the schema and tell mongoose I want to make a model
// We pass in a string containing the name of the model, and then we pass the schema.
// The name of the model is VERY IMPORTANT. It should be SINGULAR and CAPITALIZED. 
// Mongoose will take it and create a collection. The collection will be the name of the model, but PLURALIZED and LOWERCASED
// In this case, our schema is called 'Movie' and our collection called 'movies'

const Movie = mongoose.model('Movie', movieSchema);

// Make an instance of the movie class and save it to db
const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'});

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
//     { title: 'Moonrise Kingdom', year: 2012, score:  7.3, rating: 'PG-13'}
// ])
// .then(data => {
//     console.log('It worked')
//     console.log(data);
// })