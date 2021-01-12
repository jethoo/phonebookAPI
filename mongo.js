const mongoose = require('mongoose')

const password = process.argv[2]

const url = `mongodb+srv://Jeewan:${password}@cluster0.nnhlq.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

if(process.argv.length === 3){
  Phonebook.find({})
    .then(result => {
      console.log('phonebook:')
      result.forEach(contact => {
        console.log(`${contact.name} ${contact.number}`)
      })
      mongoose.connection.close()
    })
}

if(process.argv.length > 3 && process.argv.length === 5){
  //create new contact based on passed arguments
  const contact = new Phonebook({
    name: process.argv[3],
    number: process.argv[4]
  })
  //and contact is saved in the database
  contact.save()
    .then(() => {
      console.log(`added ${process.argv[3]} number ${ process.argv[4]} to phonebook`)
    })
}

if(process.argv.length < 3){
  console.log('Please provide the password,name & number as arguments: node mongo.js <password> <name> <number>')
  process.exit(1)
}







