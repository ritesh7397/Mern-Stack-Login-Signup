const UserModel = require('../Models/Users');
const bcrypt = require('bcrypt');

const signup = async(req, res)=>{
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            res.status(409).json({message: "User is already exist, you can login", success: false});
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        console.log('Data Saved');
        res.status(201).json({message: "Signup Successfully", success: true})

    }
     catch (error) {
        res.status(500).json({message: 'Internal Server Error',   success: false});
    }
}

module.exports = signup; 