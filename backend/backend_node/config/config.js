require("dotenv").config()

const config = {
    port: process.env.PORT,
    dev: process.env.NODE_ENV!=="production" ,
    cors: process.env.CORS,
    uri: process.env.MONGO_URI
}

module.exports = config