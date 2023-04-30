const express = require("express");
const mongoose = require("mongoose");
require("./db/config.js");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

app.listen(8000,()=>
{
     console.log("Server is running...");
});