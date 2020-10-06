const { MongoClient, ObjectID } = require("mongodb");



const uri = process.env.MONGO_URI || `mongodb://localhost/backend-gasolineras`


class MongoLib {
    constructor(db_name){
        this.client= new MongoClient(uri, {useNewUrlParser: true, });
        this.dbName= db_name
    }

    connect(){
        if(!MongoLib.connection){
            MongoLib.connection = new Promise((resolve, reject)=>{
                this.client.connect(err=>{
                    if(err) {
                        reject(err)
                    } else {
                        resolve(this.client.db(this.dbName));
                        console.log("Connected is true")}
                })  
            }) 
        }
        
        return MongoLib.connection
    };
    getAll(){};
    getOne(){};


}

module.exports= MongoLib