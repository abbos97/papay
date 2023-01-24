console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router.js")

// Mongodb chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 Kirish qismi
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 Session code

//3 Views code
app.set("views", "views");
app.set("views engine", "ejs");

// 4 Routing code
app.use("/", router);


module.exports = app;