import cors from "cors";
import dotenv from "dotenv";
import express from "express";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.get("/weather", async (req, res) => {
  const location = req.query.location as string;

  if (!location) {
    return res.status(400).send({ error: "Location is required" });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${process.env.WEATHER_API}`
    );
    if (!response.ok) {
      return res
        .status(response.status)
        .send({ error: "Failed to fetch data from API" });
    }
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
