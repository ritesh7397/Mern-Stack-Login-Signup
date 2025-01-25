const express = require('express'); 
const router = express.Router();  
const signup = require('../Controllers/SignupController')
const { signupValidation } = require('../Middleware/Middleware');


router.post('/', signupValidation, signup)

module.exports = router;