const express = require('express'); 
const { loginValidation } = require('../Middleware/Middleware');
const login = require('../Controllers/LoginController')
const router = express.Router();  


router.post('/', loginValidation, login)

module.exports = router;