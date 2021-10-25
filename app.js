const express = require("express");
const app = express();

app.get("/api/whoami", (req,res) => {
    console.log(req.headers);
    res.json({"ipaddress":req.ip,"language":req.headers['accept-language'],
    "software":req.headers['user-agent']});
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listen on port " + port);
})