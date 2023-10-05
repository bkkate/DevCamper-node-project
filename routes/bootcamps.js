const express = require("express");


// importing from controllers file that has all the CRUD middleware methods
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

const router = express.Router();

// for routes /api/v1/bootcamps/
router.route("/").get(getBootcamps).post(createBootcamp);

// for routes /api/v1/bootcamps/:id
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// // Routes
// router.get("/", (req, res) => {
//     res.status(200).json({ success: true, msg: "Show all bootcamps"});
//   });

//   router.get("/:id", (req, res) => {
//     res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}`});
//   });

//   router.post("/", (req, res) => {
//     res.status(200).json({ success: true, msg: "Create new bootcamp"});
//   });

//   router.put("/:id", (req, res) => {
//     res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}`});
//   });

//   router.delete("/:id", (req, res) => {
//     res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}`});
//   });

module.exports = router;
