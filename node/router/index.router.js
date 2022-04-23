const express = require('express');
const router = express.Router();

const ctrlUser = require('../controller/userController');

router.post('/register', ctrlUser.register);
router.post('/login', ctrlUser.signIn);



module.exports = router;