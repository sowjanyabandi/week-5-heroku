const express = require("express");
const app = express();
//const port = 4000;
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//console.log(process.env.PLAYER, "is a football player.");
