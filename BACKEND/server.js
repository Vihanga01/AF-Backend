import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

//Vihanga routes
import userRoutes from "./routes/userRoutes.js";

//Lukshithan routes
import studentGroupRoutes from "./routes/studentGroupRoutes.js";
import requestRoutes from "./routes/requestRoutes.js"

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8070;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  //useCreateIndex: true,
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  //useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection success!");
});

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.use("/user", userRoutes);

app.use("/studentGroup", studentGroupRoutes);

app.use("/request", requestRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
