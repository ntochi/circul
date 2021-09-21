const express = require('express');
// const port = process.env.PORT || 3009;

const app = express();

// View engine setup
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


// Routes
app.get("/", (req, res) => {
    res.render("landing")
});


app.listen(process.env.PORT);