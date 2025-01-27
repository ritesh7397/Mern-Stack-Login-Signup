const express = require('express');
const app = express();
const connectDB = require('./db')
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());


connectDB();

app.get('/',(req,res)=>{
    res.send("Welcome Users")
})

const signupRoutes = require('./Routes/SignupRoutes');
const loginRoutes = require('./Routes/LoginRoutes')

app.use('/signup',signupRoutes)
app.use('/login', loginRoutes);


app.listen(PORT,()=>{
    console.log("Listening in 3000 port")
})
