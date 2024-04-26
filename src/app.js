import "dotenv/config";
import express from "express";
import path from "path";

import router from "./router/index.routes.js";

const app = express();
const PORT = 9000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));



app.use(router);


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));