const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const resourceSchema = new Schema({
    name : {type: String, required: true, maxlength: 100},
    description : {type: String, required: true, maxlength: 500},
    phone : {type: Number, required: true, maxlength: 10},
    email : {type: String, required: true, maxlength: 150},
    website: {type: String, repuired: true}

});


module.exports = mongoose.model("resource", resourceSchema);