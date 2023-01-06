var express = require("express");
var app = express();
var router = express.Router();
var medController = require('../controllers/MedicamentoController')

router.get('/', medController.index);
router.get('/listmed', medController.listMed);
router.get('/addmed', medController.addMed);
router.get('/updateStock', medController.updateStock);
router.get('/exitRequests', medController.exitRequests);
router.get('/pdfGenerated', medController.pdfGenerated);
router.get('/pdfGenerate', medController.pdfGenerate);
router.post('/RecebeMedicamento', medController.create)
router.delete('/apagarMedicamento', medController.delete)
router.post('/recStock', medController.update)
router.post('/receive', medController.exit)


module.exports = router;