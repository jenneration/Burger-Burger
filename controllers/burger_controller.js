const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// READ all burgers in DB
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burger: data,
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//UPDATE burger devouredState to devoured = true
router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  // console.log("condition", condition);
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
  // console.log(req.body.devoured);
});

//CREATE new burger
router.post("/api/burgers", (req, res) => {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

//DELETE
router.delete("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log(condition);
  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
