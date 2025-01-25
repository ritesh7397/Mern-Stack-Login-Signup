const UserModel = require('../Models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = ' Failed email or password is wrong';
        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false});
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )
        res.status(200).json({message: "Login Success",success: true,jwtToken,email,name: user.name})
    }
     catch (err) {
        console.log(err);
         res.status(500).json({message: "Internal server errror", success: false})
    }
}

module.exports = login