const port = 2000
const host = '127.0.0.1';

//Joi class to define a schema (minimum/maximum of characteres etc)
const Joi = require('joi'); 

const logger = require('./logger')

const express = require('express');
const app = express();
app.use(express.json());
app.use(logger);



const patients = [
    {id: 1, dateIncluded: "08/24/2020", patientName: 'Abdeali Mody', age: '20', gender: 'M' , addr1: '9 Brigadoon Cresent' , addr2: '' , city: 'Scarborough' , province: 'ON' , postcode: 'M1T 3C2' , mobNumb: '647-685-0253' , email: 'modyabdeali53@gmail.com' } ,
    {id: 2, dateIncluded: "09/22/2020", patientName: 'Juliana de Carvalho', age: '25', gender: 'F' , addr1: '30 Castleton Ave' , addr2: '' , city: 'Toronto' , province: 'ON' , postcode: 'M6N 3Z8' , mobNumb: '437-242-8226' , email: 'Juliana@gmail.com' } 
]

//GET REQUESTS 

//all patients
app.get('/api/patients', (req, res) => {

    res.send(patients);
});

//By using Patient Id
app.get('/api/patients/id=:id', (req, res) =>{
    const patient = patients.find(c => c.id === parseInt(req.params.id));

    if(!patient) 
        res.status(404).send('The patient with given ID was not found');

    res.send(patient);
    
});

//By using Patient Name
app.get('/api/patients/name=:patientName', (req, res) =>{
    const patient = patients.find(c => c.patientName === req.params.patientName);

    if(!patient) 
        res.status(404).send('The patient with given Name was not found');

    res.send(patient);
    
});

//POST REQUESTS
app.post('/api/patients', async (req,res)  =>{
    //validanting the input
    const schema = Joi.object({ 
        dateIncluded: Joi.date() .required(),
        patientName: Joi.string() .required(),
        age: Joi.number() .required(),
        gender: Joi.string() .required(),
        addr1: Joi.string() .required(),
        addr2: Joi.string() ,
        city: Joi.string() .required(),
        province: Joi.string()  .required(),
        postcode: Joi.string() .max(7) .required(),
        mobNumb: Joi.string() .required(),
        email: Joi.string() .required() });
        
    const result = schema.validate(req.body);

    if (result.error){
        //400 bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const patient = {
        id: patients.length +1,
        dateIncluded: req.body.dateIncluded,
        patientName: req.body.patientName,
        age: req.body.age,
        gender: req.body.gender,
        addr1: req.body.addr1,
        addr2: req.body.addr2,
        city: req.body.city,
        province: req.body.province,
        postcode: req.body.postcode,
        mobNumb: req.body.mobNumb,
        email: req.body.email,
    };
    //storing the data in-memory 
    patients.push(patient);

    res.send(patient);
    
})

//DELETE REQUESTS

//deleting all
app.delete('/api/patients',(req,res) => {
    patients.splice(0,patients.length);

    res.send(patients);
    
});

//deleting using a specific id
app.delete('/api/patients/:id',(req,res) => {
    const patient = patients.find(c => c.id === parseInt(req.params.id));

    if(!patient) 
        res.status(404).send('The patient with given ID was not found');
    
    const index = patients.indexOf(patient);
    //index is the start and 1 is the end indicating the number of elements in the array to remove from start
    patients.splice(index,1);

    res.send(patient);
    
});


//Log the information on start-up
app.listen(port, host, function () {
    console.log("Server listening on: " + host + ":" + port);
    console.log("Endpoints: ")  
    console.log(host + ":" + port+"/api/patients  method: GET, POST, DELETE" );
  
});

