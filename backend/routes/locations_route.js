const express = require("express");
// const picUpload =require("../picUpload");
const locationController = require("../controllers/location_controller");
// const MyError = require("../models/error");
const location_router = express.Router();

// location_router.get("/:locid", );

// location_router.get("/users/:uid",);

// location_router.post("/" , );
// location_router.get("/", (req , res , next) => {
//     console.log('On locations Route');
//     res.status(200).json({
//         result:"success",
//         message:"On location page"
//     });
// });

location_router.get("/:locid", locationController.getLocationByLocId);

location_router.get("/users/:uid", locationController.getLocationByUserId);

location_router.post("/", locationController.createNewLocation);

// location_router.post("/",picUpload.single("pic"), locationController.createNewLocation);

location_router.delete("/:locid", locationController.deleteLocation);

module.exports = location_router;