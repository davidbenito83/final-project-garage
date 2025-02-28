require("dotenv").config();
const Express = require("express");
const app = Express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;
const DB_GARAGE = process.env.DB_GARAGE;

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const hbs = require("hbs")


app.use(Express.static(__dirname+'/client/build'));
app.use(Express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');

app.use(
    session({
        secret: "basic-auth",
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false },
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        })
    })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", require("./routes"));

app.use("/users", require("./routes/user"));
app.use("/products", require("./routes/product"));
app.use("/repairs", require("./routes/repair"));
app.use("/auth", require("./routes/auth"));
app.use("/userAccess", require("./routes/userAccess"));
app.use("/adminAccess", require("./routes/adminAccess"));
app.use("/cars", require("./routes/cars"));

mongoose
    .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_GARAGE}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`Connected to mongo on port ${DB_PORT}`))
    .catch(err => {
        throw err;
    });

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})  

app.use((req, res) => {
    res.render("404");
});

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT} `);
});