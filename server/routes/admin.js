const express = require('express');
const { getDashboard, AdminLogin } = require('../controller/adminController');
const router = express.Router()

router.post("/login",AdminLogin)
router.get("/dashboard",getDashboard)


module.exports = router;