const express = require('express');
const { getDashboard, AdminLogin, approveForm, rejectFrom, approvedList, rejectedList, createSlot, bookingSlot, slotBooking } = require('../controller/adminController');
const router = express.Router()

router.post("/login",AdminLogin)
router.get("/dashboard",getDashboard)
router.post("/appove-form/:id",approveForm)
router.post("/reject-form/:id",rejectFrom)
router.get("/approved-list",approvedList)
router.get("/rejected-list",rejectedList)
router.post('/create-slot',createSlot)
router.get("/booking-slot",bookingSlot)
router.get('/slotBooking',slotBooking)


module.exports = router;