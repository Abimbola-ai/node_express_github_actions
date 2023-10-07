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


app.post('/profile', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.get('/about', (req, res) => {
  const htmlFilePath = path.join(__dirname,'public', 'about.html'); 
  res.sendFile(htmlFilePath);
});

app.get('/contact-me', (req, res) => {
  const htmlFilePath = path.join(__dirname,'public', 'contact-me.html'); 
  res.sendFile(htmlFilePath);
});

app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.get("/valueofday/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
});

