const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 9008;
let campgrounds = [
  {
    name: "6 camping",
    image:
      "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Green & White",
    image:
      "https://images.pexels.com/photos/939723/pexels-photo-939723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "pine trees",
    image:
      "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Brown tent",
    image:
      "https://images.pexels.com/photos/2898221/pexels-photo-2898221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "6 camping",
    image:
      "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Green & White",
    image:
      "https://images.pexels.com/photos/939723/pexels-photo-939723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "pine trees",
    image:
      "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Brown tent",
    image:
      "https://images.pexels.com/photos/2898221/pexels-photo-2898221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds });
});

app.post("/campgrounds", (req, res) => {
  console.log(req.body);
  //   let newCampground = {
  //     name: req.body.name,
  //     image: req.body.image
  //   };

  let newCampground = req.body;

  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.listen(PORT, () => console.log("Yelp Camp server is up"));
