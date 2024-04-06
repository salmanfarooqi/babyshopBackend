// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
let mongoose = require('mongoose')
let dotenv = require('dotenv');
dotenv.config();

const connectdb = async () => {
    try {
       
        const url = "mongodb+srv://Ecommerce:Ecommerce123@atlascluster.ogtkqzh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";

        if (!url) {
            console.error("MongoDB connection URL is not defined in the .env file.");
            return;
        }

        await mongoose.connect("mongodb+srv://Ecommerce:Ecommerce123@atlascluster.ogtkqzh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster",{
            dbName:"BabyShop"
        });
    
        console.log("Connected to MongoDB");
        console.log(process.env.PORT);

    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
    }
};

module.exports =  connectdb ;
