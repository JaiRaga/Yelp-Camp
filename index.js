const express = require("express");
require("./db/mongoose");
const Campground = require("./models/Campground");
const Comment = require("./models/Comment");
const seedDB = require("./seeds");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 9008;

seedDB();

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", async (req, res) => {
  let campgrounds = await Campground.find();
  res.render("campgrounds/index", { campgrounds });
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
  res.render("campgrounds/new");
});

app.get("/campgrounds/:id", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  await campground.populate("comments").execPopulate();
  console.log(campground);
  res.render("campgrounds/show", { campground });
});

// ---------------------------
// Comments
// ---------------------------

app.get("/campgrounds/:id/comments/new", async (req, res) => {
  try {
    const campground = await Campground.findById(req.params.id);
    res.render("comments/new", { campground });
  } catch {
    res.status(404).send();
  }
});

app.post("/campgrounds/:id/comments", async (req, res) => {
  console.log(req.body);

  let newComment = new Comment(req.body);

  try {
    let campground = await Campground.findById(req.params.id);
    let comment = await newComment.save();
    campground.comments.push(comment);
    await campground.save();
    res.redirect("/campgrounds/" + campground._id);
  } catch {
    res.status(400).send();
  }
});

app.listen(PORT, () => console.log("Yelp Camp server is up"));
