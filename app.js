var express             = require("express"),
    app                 = express(),
    flash               = require("connect-flash"),
    bodyParser          = require("body-parser"),
    passport            = require("passport"),
    localStrategy       = require("passport-local"),
    mongoose            = require("mongoose"),
    methodOverride      = require("method-override"),
    expressSanitizer    = require("express-sanitizer"),
    middleware          = require("./middleware"),
    User                = require("./models/user");
    
mongoose.connect("mongodb://localhost:27017/Scattergories", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(require("express-session")({
    secret: "There is a remote on the table.",
    resave: false,
    saveUninitialized: false
}));

var gameSchema = new mongoose.Schema({
    fruit: String,
    movie: String,
    city: String,
    colour: String,
    restaurant: String,
    app: String,
    harry: String,
    alcohol: String,
    book: String,
    clothing: String,
    beach: String,
    name: String,
});

var Game = mongoose.model("Game", gameSchema);

app.get("/", function(req, res){
    res.redirect("/games/new");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/register", function(req, res){
    res.render("register");
});

//INDEX ROUTE
app.get("/games", function(req, res){
    Game.find({}, function(err, allGames){
        if(err){
            console.log("error");
        } else {
            console.log("games", allGames);
            res.render("index", {games: allGames});
        }
    });
});

//CREATE ROUTE
app.post("/games", function(req, res){
    var fruit = req.body.fruit;
    var movie = req.body.movie;
    var city = req.body.city;
    var colour = req.body.colour;
    var restaurant = req.body.restaurant;
    var app = req.body.app;
    var harry = req.body.harry;
    var alcohol = req.body.alcohol;
    var book = req.body.book;
    var clothing = req.body.clothing;
    var beach = req.body.beach;
    var name = req.body.name;
    var newGame = {fruit: fruit, movie: movie, city: city, colour: colour, restaurant: restaurant, app: app, harry: harry, alcohol: alcohol, book: book, clothing: clothing, beach: beach, name: name}
    Game.create(newGame, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/games");
        }
    });
});

//NEW ROUTE
// app.get("/games/new", middleware.isLoggedIn, function(req, res){
//     res.render("new");
// });
app.get("/games/new", function(req, res){
    res.render("new");
});

//SHOW ROUTE
app.get("/games/:id", function(req, res){
    Game.findById(req.params.id, function(err, foundGame){
        if(err || !foundGame){
            res.redirect("index");
        } else {
            res.render("show", {game: foundGame});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SCATTER!!!");
});
