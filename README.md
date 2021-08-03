# Mongoose 'models'
The most important thing to understand about mongoose. 
Models are Javascript classes that we make with the assistance of mongoose.
They represent information in a Mongo database (specifically a collection). 
The Javascript class should model the information coming back from our Mongo database and help us interact, query, send new information to the database.
For EVERY different resource (i.e. collection) in a Mongo database, if we plan on accessing it using mongoose, we'll need to define a model for EACH one. 

# Mongoose 'schemas'
A schema is like a blueprint, a game plan. 
A 'mapping' of different 'collection keys' from Mongo to different 'types' in Javascript.
We are defining the shape of the data that we are expecting to receive. 

For example
```Javascript
const blogSchema = newSchema({
    title: String, 
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})
```

**or** 

```Javascript
{
    title: 'Amadeus',
    year: 1986,
    score: 9.2,
    rating: 'R'
}

// Each key is going to be set to some type (like String). The keys defined here will also be used to set the 'keys' in my Mongo document, so we want to give specific names that we'll use later on. 

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})
```


Mongoose docs: https://mongoosejs.com/docs/index.html