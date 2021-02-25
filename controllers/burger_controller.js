const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Update burger devouredState to devoured = true
router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
  console.log(req.body.devoured);
});

//Add new burger
router.post("/api/burgers", (req, res) => {
  cat.create(["burger_name"], [req.body.burger_name], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// router.delete('/api/burgers/:id', (req, res) => {
//   const condition = `id = ${req.params.id}`;

//   cat.delete(condition, (result) => {
//     if (result.affectedRows === 0) {
//       return res.status(404).end();
//     }
//     res.status(200).end();
//   });
// });

module.exports = router;
