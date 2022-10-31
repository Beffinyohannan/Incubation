const { postSignup, postLogin, homePage, applicationForm, checkApplication } = require('../controller/userController');
const check = require('../middleware/authjwt');
const User = require('../model/userModel');
const router = require('express').Router()
const multer = require('multer')



const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, '../server/public/images');
    },
    filename(req, file, callback) {
        callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({ storage });

router.post("/signup",postSignup)
router.post("/login",postLogin)
router.post("/homepage",check,homePage)
router.post("/application-from",upload.single('image'),applicationForm)
router.post("/check-application",checkApplication)



module.exports = router;