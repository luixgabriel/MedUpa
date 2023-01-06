var express = require("express");
var app = express();
var router = express.Router();
var medController = require('../controllers/MedicamentoController')

router.get('/', medController.index);
router.get('/listmed', medController.listMed);
router.get('/addmed', medController.addMed);
router.post('/RecebeMedicamento', medController.create)

// router.post('/user', UserController.create);
// router.get("/user",AdminAuth,UserController.index);
// router.get("/user/:id",AdminAuth,UserController.findUser);
// router.put("/user",AdminAuth,UserController.edit);
// router.delete("/user/:id",AdminAuth,UserController.remove);
// router.post("/recoverpassword",UserController.recoverPassword);
// router.post("/changepassword",UserController.changePassword);
// router.post("/login",UserController.login);

module.exports = router;