const mongoose = require('mongoose');

var Period = mongoose.model('Period', {
    startTime: { type: Number },
    endTime: { type: Number },
    courseCode: { type: String },
    isTheory : {type : Boolean},
    courseTeachers: [{type:String}],
    
},'Periods');




module.exports = { Period : Period };