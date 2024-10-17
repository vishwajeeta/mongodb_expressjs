const express = require('express');
const connectDB=require('./config/db');
const cors =require('cors');

const app=express();

// Connect Database
connectDB();

// Middleware
app.use(express.json({extended:false}));
app.use(cors());

// Define Routes
app.use('/api/auth',require('./routes/auth'));

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server started on port ${PORT}`))