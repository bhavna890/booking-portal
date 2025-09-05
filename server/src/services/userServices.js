const User = require("../modules/user");

const getAllUsersDB = () => {
  return User.find({}).select("-password");
};

module.exports = { getAllUsersDB };