const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

    const router = express.Router();

    //SHOW ALL /api/bookings GET
    router.get('/', (req, res)=>{
        collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({status: 500, error: err});
            });

    });


    //SHOW ONE /api/bookings/:id GET
    //CREATE /api/bookings POST
    //UPDATE /api/bookings/:id PUT
    //DELETE /api/bookings/:id DELETE

    return router;
}; 


module.exports = createRouter;