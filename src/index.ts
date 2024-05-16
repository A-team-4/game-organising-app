import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Express server started on port 3000");
})