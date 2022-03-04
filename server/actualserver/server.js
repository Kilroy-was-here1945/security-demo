const express = require("express");
const cors = require("cors");

const app = express();

const {createMessages} = require("./controller.js");


app.use(express.json());
app.use(cors());

app.post("/api/messages", createMessages);


app.listen(4004, () => {
    console.log("you are running on 4004")
});
