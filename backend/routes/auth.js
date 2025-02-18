const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/user');
const router=express.Router();

// Register
router.post('/register',async(req,res)=>{
    const {username,email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(user){
            return res.status(400).json({msg:'user already exists'});
        }
        user=new User({username,email,password});
        const salt =await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(password,salt);
        await user.save();
        res.status(200).send("User Registered");
    } catch (err){
        res.status(500).send("Server Error");
    }
})

router.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    try{
        
        let user=await User.findOne({email});
        
        if(!user){
            return res.status(400).json({msg:'Invalid Credentials'});
        }
        
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:'Invalid Credentials'});
        }
        const payload={user:{id:user.id}};
        jwt.sign(payload,'secretKey',{expiresIn:'1h'},(err,token)=>{
            if(err) throw err;
            // res.json({token});
            res.json({token,username:user.username});
        });
    } catch (err){
        res.status(500).send("Server Error")
    }
});

// // Example: Login route (auth.js)
// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
  
//     if (user && bcrypt.compareSync(password, user.password)) {
//       // Generate JWT Token
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: '1h',
//       });
  
//       // Send token and username back to the client
//       res.json({
//         token,
//         username: user.username,
//       });
//     } else {
//       res.status(400).json({ message: 'Invalid credentials' });
//     }
//   };
  
module.exports=router;
