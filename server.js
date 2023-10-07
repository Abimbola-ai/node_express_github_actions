var express = require('express');
var app = express();


const path = require('path'); // Import the path module

const SERVER_PORT = 3000;
const SERVER_HOST = "localhost";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  const htmlFilePath = path.join(__dirname,'public', 'index.html'); // Specify the absolute path to HTML file
  res.sendFile(htmlFilePath); // Send the HTML file
});



app.get('/about', (req, res) => {
  const htmlFilePath = path.join(__dirname,'public', 'about.html'); 
  res.sendFile(htmlFilePath);
});

app.get('/contact-me', (req, res) => {
  const htmlFilePath = path.join(__dirname,'public', 'contact-me.html'); 
  res.sendFile(htmlFilePath);
});


app.get("/user", (req, res) => {
  res.sendFile(__dirname + "/user.html");
});

app.get("/valueofday", (req, res) => {
  const currentDate = new Date(); // Get the current date and time
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  // Create an object with the properties
  const dateTimeData = {
    year,
    month,
    day,
    hours,
    minutes,
    seconds
  };

  // Send the JSON data as the response
  res.json(dateTimeData);
});




app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
});

