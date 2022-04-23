const express = require('express');
var router = express.Router();

var { Period } = require('../models/period');

router.get('/', (req, res) => {
    Period.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Periods :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var period = new Period({
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        courseCode: req.body.courseCode,
        isTheory: req.body.isTheory,
        courseTeachers: req.body.courseTeachers,  

    });
    period.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;