const express = require('express');
const router = express.Router();

// Schema goes here


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


// PUT route


// DELETE route


module.exports = router;
