require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Phonebook = require('./models/phonebook')


app.use(express.static('build'))

app.use(express.json())
app.use(cors())
//define own token for logging POST data
morgan.token('postData', (req,res) => JSON.stringify(req.body))

//morgan is a middleware which helps to show our activities or logs happening in the server
//in a better way through console
//app.use(morgan('tiny'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'))



app.get('/api/persons', (request, response) => {
    Phonebook.find({})
        .then(persons => {
            //assigning persons to totalPersons
            //totalPersons = persons
            response.json(persons)
        })
})

let res = ''
app.get('/info', (request, response) => {
        Phonebook.find({})
            .then(result => {
                res = result
                response.send(
                    `
                        <p>Phonebook has info for ${res.length} people</p>
                        <p>${new Date().toString()}</p>
                    `
                )
            })
})

app.get('/api/persons/:id', (request,response, next) => {
   //request url's params gives id
   Phonebook.findById(request.params.id)
        .then(person => {
            if(person){
                response.json(person)
            }
            else {
                response.status(404).end()
            }
        })
        .catch(error => {
            next(error)
        })
})

//deleting single resource/entry
app.delete('/api/persons/:id', (request,response, next) => {
    Phonebook.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

//creating new person
app.post('/api/persons', (request,response, next) => {
    const body = request.body
    //const existingName = persons.find(person => person.name === body.name)
    if(!body.newName){
        return response.status(400).json({
            error: 'name missing'
        })
    }else if(!body.number){
        return response.status(400).json({
            error: 'number missing'
        })
    }

    const person = new Phonebook({
        name: body.newName,
        number: body.number
        //id: generateId()
    })

    person.save()
        .then(savedPerson => {
            response.json(savedPerson)
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next ) => {
     const opts = { runValidators: true }
     const body = request.body
     console.log('body is', body)
     const person = {
         name: body.name,
         number: body.number
     }
     
     Phonebook.findByIdAndUpdate(request.params.id, person, { new: true, opts})
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})

//express error handler
const errorHandler = ( error, request, response, next ) => {
    console.log(error.message)
    if(error.name === 'CastError'){
        return response.status(400).send({ error: 'malformatted id'})
    }else if(error.name === 'ValidationError'){
        return response.status(400).json({ error: error.message })
    }else if(error.name === 'TypeError'){
        return response.status(400).json({ error: error.message })
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})