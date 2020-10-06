const express = require("express")
const app = express()

const {port}=require("./config/config")

const LocationsRotes = require("./routes/gasStations")

//Routes
LocationsRotes(app)

//Server listen
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})

