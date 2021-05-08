const { Post } = require('../models');

[
    {
      "title": "Polished UI",
      "contents": "Blah"
    },
    {
        "title": "JavaScript Basics",
        "contents": "Blah blah"
      },
      {
        "title": "MySQL",
        "contents": "Blah Blah blah."
      }
  ]
  
const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;