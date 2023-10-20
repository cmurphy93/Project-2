const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://chrisdamianm:ksdlZgmGPyFLkEla@cluster0.g5ecnwz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
    }); 

const app = express();
const PORT = 4040 || process.env.PORT;

app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Live on port ${PORT}`);
})

