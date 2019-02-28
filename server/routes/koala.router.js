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
    // REPLACE THIS with mongoose find
    res.send([
        {
            _id: ObjectId("58de9673d0c1cb22fbcb2655"),
            name: "Scotty",
            gender: "M",
            age: 4,
            ready_to_transfer: true,
            notes: "Born in Guatemala"
        }
    ])
});

// POST route
router.post('/', (req, res) => {
    // REPLACE THIS with mongoose find
    
});

// PUT route


// DELETE route


module.exports = router;
