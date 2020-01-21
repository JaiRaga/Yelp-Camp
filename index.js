const express = require("express");
require("./db/mongoose");
const Campground = require("./models/Campground");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 9008;

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", async (req, res) => {
  let campgrounds = await Campground.find();
  res.render("index", { campgrounds });
});

app.post("/campgrounds", async (req, res) => {
  let newCampground = new Campground(req.body);

  try {
    await newCampground.save();
    res.status(201).redirect("/campgrounds");
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.get("/campgrounds/:id", (req, res) => {
  res.send("campground!!");
});

app.listen(PORT, () => console.log("Yelp Camp server is up"));
