import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./src/config/viewEngine";
import initWebRoutes from "./src/route/web";

const app = express();
let port = process.env.PORT || 6969;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
    console.log("Server running on port " + port);
});