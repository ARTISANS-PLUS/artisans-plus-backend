const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        application: "Artisans+ API",
        version: "1.0.0"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Backend opérationnel"
    });
});

module.exports = app;
const routes=require("./routes");
app.use("/api",routes);
const routes=require("./routes");
