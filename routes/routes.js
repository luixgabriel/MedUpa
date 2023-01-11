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
router.get('/relComsun', medController.relConsum);
router.get('/relRequest', medController.relRequest);
router.post('/ReceiveMedicine', medController.create)
router.post('/DeleteMedicine', medController.delete)
router.post('/recStock', medController.update)
router.post('/receive', medController.exit)


module.exports = router;