// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);
}

// GET route
app.get("/all", sendData);

function sendData(request, response) {
  response.send(projectData);
}

// POST route
app.post("/add", callBack);

function callBack(req, res) {
  res.send("POST received");
}

projectData = {};

// Interaction on click

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
  const newAnimal = document.getElementById("zip").value;
  const favFact = document.getElementById("feelings").value;

  getAnimal("/animalData")
    // New Syntax!
    .then(function (data) {
      // Add data
      console.log(data);
      postData("/addAnimal", {
        animal: data.animal,
        fact: data.fact,
        fav: favFact,
      });
    })
    .then(updateUI());
}

const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = allData[0].animal;
    document.getElementById("temp").innerHTML = allData[0].facts;
    document.getElementById("content").innerHTML = allData[0].fav;
  } catch (error) {
    console.log("error", error);
  }
};
