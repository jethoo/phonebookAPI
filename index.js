const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())
//define own token for logging POST data
morgan.token('postData', (req,res) => JSON.stringify(req.body))

//morgan is a middleware which helps to show our activities or logs happening in the server
//in a better way through console
//app.use(morgan('tiny'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'))



let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Marry Poppendick",
        number: "39-23-6423122"
    }
]


app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    response.send(
        `
            <p>Phonebook has info for ${persons.length} people</p>
            <p>${new Date().toString()}</p>
        `
    )
})

app.get('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => {
        return person.id === id
    })
    if(person){
        response.json(person)
    }else{
        //status 400 if the requested resource is not present in the backend
        response.status(400).end()
    }
})

//deleting single resource/entry
app.delete('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id)
    //updating the persons array by filtering all those objects not matching the passed id
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(150))
}

//creating new person
app.post('/api/persons', (request,response) => {
    const body = request.body
    const existingName = persons.find(person => person.name === body.name)
    console.log(existingName)
    if(!body.name){
        return response.status(400).json({
            error: 'name missing'
        })
    }else if(!body.number){
        return response.status(400).json({
            error: 'number missing'
        })
    }else if(existingName){
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)
    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})