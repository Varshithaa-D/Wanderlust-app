const express = require("express");
const router = express.Router();

// GET all users
router.get("/", (req, res) => {
    res.send("GET for users ");
});

// GET user by ID
router.get("/:id", (req, res) => {
    res.send("GET for users id");
});

// POST new user
router.post("/", (req, res) => {
    res.send("POST for users");
});

// DELETE user by ID
router.delete("/:id", (req, res) => {
    res.send("DELETE for users id");
});

module.exports = router;
