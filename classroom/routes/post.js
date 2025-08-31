const express = require("express");
const router = express.Router();

// GET all posts
router.get("/", (req, res) => {
    res.send("GET for posts");
});

// GET post by ID
router.get("/:id", (req, res) => {
    res.send("GET for posts id");
});

// POST new post
router.post("/", (req, res) => {
    res.send("POST for posts");
});

// DELETE post by ID
router.delete("/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;
