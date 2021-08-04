const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log('Connection open.')
})
.catch(err => {
    console.log(`${err}`)
})

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function (){
    this.first = 'John';
    this.last = 'Doe';
    console.log('About to save')
})
personSchema.post('save', async function (){
    console.log('Just saved')
})

const Person = mongoose.model('Person', personSchema);
 
