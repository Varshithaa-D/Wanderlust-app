const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// All Listings
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

// New Listing Form
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Search Listings
router.get("/search", wrapAsync(async (req, res) => {
  const query = req.query.q;
  const allListings = await Listing.find({
    title: { $regex: query, $options: "i" } // Case-insensitive partial match
  });
  res.render("listings/index", { allListings });
}));


// Single Listing CRUD
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"), // <-- necessary for image upload
    validateListing,
    wrapAsync(listingController.updateListing) // ✅ FIXED HERE
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));


// Edit Form
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));


module.exports = router;
