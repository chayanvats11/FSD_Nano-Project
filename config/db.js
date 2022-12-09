require('dotenv').config();
const mongoose = require('mongoose');

    const connectDB = () =>{
        mongoose.connect("mongodb+srv://falconShareuser:QCLvqoXfamVRDCR3@cluster0.ldqfbg0.mongodb.net/falconShare?retryWrites=true&w=majority",{useUnifiedTopology:true , useNewUrlParser:true  }).then((data)=>{
            console.log(`Mongodb connected with server : ${data.connection.host}`)
        }).catch((err)=>{
            console.log(err)
        })
    }

module.exports = connectDB;