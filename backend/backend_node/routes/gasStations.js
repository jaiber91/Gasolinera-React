const express = require("express")

let LocationsRotes =(app)=>{
    const router = express.Router()
    app.use("/api/gasStations", router)

    router.get("/", (request, response)=>{
       response.send("hola mundo")
    });

    router.get("/:_id", (request, response)=>{
      
    });

}

module.exports = LocationsRotes