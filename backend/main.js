var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

const dev = false;

if (dev) {
    app.use(express.static(path.join(__dirname, "../")));
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public", "index.html"));
    });
} else {
    app.use(express.static(path.join(__dirname, "../build")));
    app.use("/", router)
    /* app.get("*", (req, res) => {
        if (req.xhr) {
            //res.sendFile(path.join(__dirname, "../build", req.path));
        } else res.sendFile(path.join(__dirname, "../build", "index.html"));
        console.log(req.xhr);
    }); */

    router.get('/user', function (req, res, next) {
        console.log(1)
        //res.send("1");
        next('router')
    }, function (req, res, next) {
        console.log(2)
        res.send('User Info')
        next()
    })

    // handler for the /user/:id path, which prints the user ID
    router.use('/user', function (req, res, next) {
        console.log(3)
        res.end(req.params.id)
    })
}

app.listen(8080);