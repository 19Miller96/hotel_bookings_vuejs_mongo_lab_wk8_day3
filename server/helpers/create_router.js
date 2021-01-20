const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

    const router = express.Router();

    //SHOW ALL /api/bookings GET
    //SHOW ONE /api/bookings/:id GET
    //CREATE /api/bookings POST
    //UPDATE /api/bookings/:id PUT
    //DELETE /api/bookings/:id DELETE
}; 

module.exports = createRouter;