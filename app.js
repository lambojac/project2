import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import cors from "cors";
import mongoose from 'mongoose';
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(morgan('dev')); 
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true })); 

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit(0);
  });


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
