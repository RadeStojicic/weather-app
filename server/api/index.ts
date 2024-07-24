import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import errorHandler from "./middleware/error";

const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();

app.use(
  cors({
    origin: "https://rade-weather.vercel.app/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.get("/weather", async (req, res, next) => {
  const location = req.query.location as string;

  if (!location) {
    return res.status(400).send({ error: "Location is required" });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${process.env.WEATHER_API}`
    );
    const data = response.data;
    res.send(data);
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
