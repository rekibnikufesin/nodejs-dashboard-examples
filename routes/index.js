'use strict';

let express = require('express');
let router = express.Router();
let faker = require('faker');

router.get('/', function(req, res, next) {
    let searchterm = faker.random.word();
    console.log(`Search for ${searchterm}`);
    res.send(searchterm);
});

module.exports = router;