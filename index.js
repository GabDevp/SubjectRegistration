const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const personaRouter = require("./routes/personaRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/persona', personaRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));