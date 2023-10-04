const express = require("express");
const mongoose=require("mongoose");
const cors = require("cors");
const MyError = require("./models/error");
const location_route = require("./routes/locations_route");
const user_route = require("./routes/users_route");
const app = express();
// app.use(location_route);
app.use(cors());
app.use(express.json()); //built in middle ware
app.use("/uploads/users",express.static(`${__dirname}\\uploads\\users`)); // to show uploaded pics on web.
app.use("/uploads/userpic",express.static(`${__dirname}\\uploads\\userpic`)); // to show uploaded pics on web.
app.use("/api/locations", location_route); //location route middleware custom  made
app.use("/api/users", user_route); //user route middleware custom made

// to handle the issue that can occur when the path accessed by user that does not exists :-
app.use("*", (req, res, next) => { // * refers to all the paths excluding the paths which are not defined above.
  return next(new MyError("Cannot find path", 404));
});

app.use((error, req, res, next) => {
  //error middleware custom made
  if (res.headerSent) {
    next(error);
  }
  res.status(error.code || 500);
  res.json({
    result: "fail",
    message: error.message || "Something bad happened",
  });
});

mongoose
.connect("mongodb+srv://saininaveen933:naveen1234@cluster0.ulfxtwl.mongodb.net/picpot?retryWrites=true&w=majority"
// mongodb+srv://picpotadmin:6uMvqjpnrGcz4vgW@cluster0.rl7sh7f.mongodb.net/PicturePot?retryWrites=true&w=majority"
).then(()=>{ // so the server will run only when the database is connected.
  app.listen(4000, () => {
    console.log("server running @ 4000");
  });
})
.catch((error)=>{
  console.log(error);
});


// mongodb+srv://saininaveen933:naveen1234@cluster0.ulfxtwl.mongodb.net/picpot?retryWrites=true&w=majority


 