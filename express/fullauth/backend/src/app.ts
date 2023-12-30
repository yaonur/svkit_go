require("dotenv").config();
import express from "express";
var bodyParser = require("body-parser");
import config from "config";
import { connectToDb } from "./utils/connectToDb";
import router from "./routes";

const app = express();
app.use(bodyParser.json())
app.use(router);
const port = (config.get("port") as number);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectToDb();
});
