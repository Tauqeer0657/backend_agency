const mongoose = require("mongoose");

const queryModelSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
    },
    address : {
        type : String,
        required : true
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/^[6-9]\d{9}$/, 'Please fill a valid Indian phone number']
    },
    dateOfSlotBooking : {
        type : Date,
        required : true
    }
})

// Now we will create a new collection 

const Query = new mongoose.model("Query",queryModelSchema);

module.exports = Query;
