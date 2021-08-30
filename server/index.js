const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

const contactRoutes = require('./routes/contact');

//Middleware to allow express to serve Static files
app.use(express.static('public'));

//Middleware to read the BODY of incoming requests
app.use(express.json());

//Middleware to enable cors
app.use(cors());

app.use('/api', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});