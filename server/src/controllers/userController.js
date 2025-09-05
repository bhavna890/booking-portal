const { getAllUsersDB } = require("../services/userServices");

const getAllUsers = async(req, res) => {
  const data = await getAllUsersDB();
  return res.json({ success: true, data });
};

module.exports = { getAllUsers };