const express = require("express");
const mongoose = require("mongoose");

const posts = require("./dbModels.js");

//app config
const app = express();
const PORT = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//DB config
const CONNECTION_URL =
  " mongodb+srv://admin:xjUdNtYNiFrI3iZW@cluster0.uht0f.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//api endpoints

app.get("/", (req, res) => res.status(200).send("foo bar"));

app.post("/v2/posts", (req, res) => {
  const dbPosts = req.body;
  posts.create(dbPosts, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});

app.get("/v2/posts", (req, res) => {
  posts.find({}, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});

//listen
app.listen(PORT, () => console.log("listening...."));

//xjUdNtYNiFrI3iZW
// mongodb+srv://admin:<password>@cluster0.uht0f.mongodb.net/<dbname>?retryWrites=true&w=majority
