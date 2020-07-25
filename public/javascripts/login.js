var mongojs = require("./../../node_modules/mongojs");
var db = "localhost/InfyShopping";
var collections = ["UserInfo"];

var dbConn = mongojs(db, collections);

exports.loginUser = function(uName, psw, res,next) {
  dbConn.UserInfo.find({ name: uName, password: psw }, function(err, records) {
    console.log(records);
    if (err || !records || records.length == 0) {
      console.log("No records");
      var err = new Error();
      err.statusCode=200;
      err.message="No Users";
      res.send(err);
      //next(err);
    } else {
      //console.log("Login Success");
      //res.send({message:"Login Success"});
      res.json({message:"Login Success"});
    }
  });
};
