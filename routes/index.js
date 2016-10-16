'use strict';

let express = require('express');
let router = express.Router();
let faker = require('faker');
let words = [];
let profiler = require('gc-profiler');

profiler.on('gc', (info) => {
    console.error(info);
});

router.get('/', function(req, res, next) {
    let num = Math.floor(Math.random() * 1000) + 1;
    let searchterm = faker.lorem.words(num);
    let arr = searchterm.split(' ');
    arr.forEach(word => {
        words.push(word);
    });
    console.log(`Generating ${num} words`);
    res.send(searchterm);
});

module.exports = router;