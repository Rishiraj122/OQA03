const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    questionid:{
        type: String,
        required: [true, 'Question id is required']
    },
    answer:{
        type: String,
        required: [true, 'Answer is required']
    },
    answeredby:{
        type: String,
        required: [true, 'Answered by']
    }
    
})

module.exports=mongoose.model('Answer',userSchema);