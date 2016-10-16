'use strict';

let express = require('express');
let router = express.Router();
let faker = require('faker');
let fs = require('fs');

let clock = (start) => {
    if(!start) return process.hrtime();
    let end = process.hrtime(start);
    return Math.round((end[0]*1000) + (end[1]/1000000));
}

router.get('/', function(req, res, next) {
    let start = clock();
    let num = Math.floor(Math.random() * 1000) + 1;
    let searchterm = faker.lorem.words(num);
    let arr = searchterm.split(' ');
    let fsStart = clock();
    arr.forEach(word => {
        fs.writeFileSync('lorem.txt', word);
    });
    let fsDuration = clock(fsStart);
    console.log(`Generating ${num} words`);
    res.send(searchterm);
    let duration = clock(start);
    console.error(`router.get / took ${duration}, fs write took ${fsDuration}`);
});

module.exports = router;