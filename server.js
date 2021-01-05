
const mongoose = require("mongoose");
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false, otherwise get a deprecation warning
mongoose.set("useFindAndModify", false);
const bodyParser = require("body-parser");
let port = process.env.PORT || 3050;
const mongoDB =
  "mongodb+srv://dbAdmin:SKCstudent@cluster0.ewhdg.mongodb.net/ResourcedKC?retryWrites=true&w=majority";
var Admin = require("./assests/JS/models/adminSchema.js");
var Resource = require("./assests/JS/models/resourceSchema");

mongoose.connect(
  mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) return console.error(err);
    //check to see if connection worked.
    console.log("Connected to database");
  }
);
//imports the express module
const express = require("express");
//declaring the variable path and using that to serve back a HTML file later in code
const path = require("path");
const admin = require("./assests/JS/models/adminSchema.js");


//creates a new express application
const adminApp = express();

//allowing express to use static files in the folder name public
adminApp.use(express.static(path.join(__dirname, "public")));
//
adminApp.use(bodyParser.json());
adminApp.use(bodyParser.urlencoded({ extended: false }));

//declare the port I am wanting to connect to
// const port = 3000;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

//opening up our server to listen on a specific ip address and port
//ip addresses are also know as hostname or host
adminApp.listen(port, function () {
  console.log("The server is up and running at " + port);
});


adminApp.post("/resources", (request, res) => {
    let node = new Resource(request.body);
    node.save(function (error, node) {
      if (error) {
        res.sendStatus(500);
        return console.error(error);
      }
      return node;
    });
  });

  adminApp.post("/creation/:id", (req, response) => {
    let created = new Admin(req.body);
    created.save(function (error, created){
      if(error){
        response.sendStatus(500);
        return console.error(error);
      }
      return created;
    });
  });