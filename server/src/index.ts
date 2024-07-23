import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<p>Hello World!aa</p>");
});

app.get("/hi", (req, res) => {
  res.send("Hia!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
