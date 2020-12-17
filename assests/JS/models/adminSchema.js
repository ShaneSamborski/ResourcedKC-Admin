const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {type: String, required: true, maxlength: 25},
    password : {type: String, required: true, minlength: 8},
    emailAddress : {type: String, required: true, maxlength: 150},
    admin : {type: Boolean, required: true}
});

module.exports = mongoose.model("admin", userSchema);




