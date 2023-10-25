const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const mongoURI = '';
const db = mongoose.connection;
const cookieParser = require('cookie-parser');

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
    }); 

const app = express();
const PORT = 8090;

app.use("/Routers", express.Router);
app.use(expressLayouts);
app.use(cookieParser());

app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Live on port ${PORT}`);
})

