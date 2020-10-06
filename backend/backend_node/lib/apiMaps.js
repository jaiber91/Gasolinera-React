const axios = require("axios")                                                                                           
const { gasolineras } =require("../utils/mocks/mock")

let mapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/-101.377295,26.975178.json?access_token=pk.eyJ1Ijoiam9oYW5hZyIsImEiOiJja2Z1cXRqY3IxOWtqMnJud2J2NHJieXBzIn0.kS3WT8x5Adzfv45XjLJmnQ`
 
const obtenerbicacion = (array)=>{
    for (let i = 0; i < array.length; i++) {
        let latitud = gasolineras[i].location.latitud 
        let longitud = gasolineras[i].location.longitud
        
        
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitud},${latitud}.json?access_token=pk.eyJ1Ijoiam9oYW5hZyIsImEiOiJja2Z1cXRqY3IxOWtqMnJud2J2NHJieXBzIn0.kS3WT8x5Adzfv45XjLJmnQ`)
        .then(e=>{
            const data=e.data
            console.log(data.features[0].context[1].text)
            console.log(data.features[0].context[2].short_code)
            console.log(data.features[0].context)
            })
            .catch(err=>console.log(err));
    }
}

obtenerbicacion(gasolineras)


