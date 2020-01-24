const mongoose = require("mongoose");
const Campgrounds = require("./models/Campground");
const Comment = require("./models/Comment");

const comment = {
  author: "Homer",
  text: "I wish this place had internet..."
};

const data = [
  {
    name: "6 camping",
    image:
      "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "balh blah blah"
  },
  {
    name: "Green & White",
    image:
      "https://images.pexels.com/photos/939723/pexels-photo-939723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "balh blah blah"
  },
  {
    name: "pine trees",
    image:
      "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "balh blah blah"
  },
  {
    name: "Brown tent",
    image:
      "https://images.pexels.com/photos/2898221/pexels-photo-2898221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "balh blah blah"
  }
];

const seedDB = async () => {
  //   Campgrounds.deleteMany()
  //     .then(() => console.log("Campgrounds removed!"))
  //     .catch(e => console.log(e));
  try {
    await Campgrounds.deleteMany();
    console.log("Campgrounds removed");

    data.forEach(async seed => {
      const campground = new Campgrounds(seed);
      const newComment = new Comment(comment);
      await campground.comments.push(newComment);
      await campground.save();
      console.log("Added Campgroud!");
      await newComment.save();
      console.log("Added Comment..");
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = seedDB;
