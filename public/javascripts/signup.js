var mongojs = require("./../../node_modules/mongojs");
var db = "localhost/InfyShopping";
var collections = ["UserInfo"];

var dbConn = mongojs(db, collections);

exports.registerUser = function(uName, psw, mail, res,next) {
  dbConn.UserInfo.save({ name: uName, password: psw, email: mail }, function(
    err,
    isSaved
  ) {
    if (err | !isSaved) {
      var err = new Error();
      err.statusCode =503;
      err.message="Some Issue";
      //next(err);
      res.send(err);
    }
    else {
      console.log("User Saved Successfully");
      res.json({message:"User Saved Successfully"});
    }
  });
  //return "User saved successfully";
};
