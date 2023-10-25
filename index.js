const express = require(`express`);
const mongoose = require(`mongoose`);
const expressHandlebars = require("express-handlebars")
const { DATABASE_URL} = require("./config");

const hbs = expressHandlebars.create({
    defaultLayout: null,
    runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
    }
})

const app = express();

app.engine("handlebars", hbs.engine)

const {User} = require("./models/user");

app.set("view engine", "handlebars")
//------------------------------ USER ROUTES ---------------------------


app.get("/users", async (req, res) => {
    console.log(req.body)

    const allmyUsers = await User.find()

    console.log(allmyUsers)

    res.render("./users/users", {allmyUsers})
})

app.get("./users/newusers", (req, res) => {
    res.render("/users/newusers")
})

app.post("/users", async (req, res) => {
    res.send(`users POST port`)
    console.log(req.body)

    User.create(req.body)
    res.send("user created")

    const newUser = await User.create(req.body)
    res.json(newUser)
})



// ---------------------- BLOG ROUTES


app.get("/blog", (req, res) => {
    console.log(req.body)
    res.send(`blog port`)
})

app.post("/blog", (req, res) => {
    console.log(req.body)
    res.send(`blog POST port`)
})





//starts server
const startServer = async () => {
    await mongoose.connect(DATABASE_URL);
}

app.listen(4000, () => {
    console.log(`listening`)
})

startServer();