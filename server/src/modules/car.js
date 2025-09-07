const mongoose = require("mongoose");

const carServiceSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  carModel: { type: String, required: true },
  serviceType: { type: String, enum: ["Oil Change", "Brake Repair", "Engine Check", "Full Service"], required: true },
  serviceDate: { type: Date, default: Date.now },
  cost: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
});

module.exports = mongoose.model("CarService", carServiceSchema);