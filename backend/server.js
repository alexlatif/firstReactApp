import express from 'express'
import dbRoutes from './routes/databaseAccess.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express()

mongoose.connect(process.env.MONGODB_URI)

// makes the build folder publicly available.
app.use(express.static('build'));

//middleware for req.body
//before routes but after build path
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/db', dbRoutes);


app.listen(3001, () => {
  console.log('connected to server 3000')
})
