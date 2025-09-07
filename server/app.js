require("dotenv").config();

const express = require('express');
const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");
 const carServiceRoutes = require("./src/routes/carServiceRoutes");


const { connectDB } = require("./src/config/db");

const app= express();
 const port = 4000;

connectDB();

app.use(express.json());


 app.get("/", (req, res)=> {
   res.send("hello server");
 });

app.use("/services", carServiceRoutes);

 app.use("/auth", authRoutes);

 // user routes
app.use("/user", userRoutes);

app.listen(port, () => {
    console.log(`server in running on http://localhost:${port}`);
});