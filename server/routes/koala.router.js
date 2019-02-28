const express = require('express');
const router = express.Router();

// Schema goes here
const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/koalaholla';
mongoose.connect(databaseUrl, { useNewUrlParser: true });

mongoose.connection.once('connected', () => {
    console.log('connected to mongo!');
});

const Schema = mongoose.Schema;
const koalaSchema = new Schema({
    name: { type: String, required: true},
    gender: { type: String },
    age: { type: Number },
    ready_to_transfer: {type: Boolean },
    notes: { type: String },
});

const Koala = mongoose.model('Koala', koalaSchema );
// end Schema

// GET Route
router.get('/', (req, res) => {
    Koala.find({}).then((results) =>{
        res.send(results);
    }).catch(error =>{
        console.log('GET Error', error)
        res.sendStatus(500);
    })
});

// POST route
router.post('/', (req, res) => {
    Koala.create(req.body).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        const errorMessage = `Error in route POST /api/koala. ${error}`;
        console.log(errorMessage);
        res.sendStatus(500);
    })
});

// PUT route


// DELETE route


module.exports = router;
