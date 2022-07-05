const mongoose = require('mongoose');

const connectdb = async ()=>{
    try {
        const url= process.env.MONGO_URI
        const conn = await mongoose.connect(url, {
            useUnifiedTopology:true,
            useNewUrlParser:true
         
        })
        console.log(`db connected  ${conn.connection.host}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
    }
}
module.exports = connectdb; 