var express = require('express');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
var router = express.Router();
var layoutController = require('../controller/layout')

// Get Schema
router.get('/getSchema/:id', layoutController.readLayout);

// SET Schema
router.post('/setSchema', layoutController.createLayout)

//UPDATE Schema
router.post('/updateSchema/:id', layoutController.updateLayout)

//DELETE Schema
router.get('/deleteSchema/:id', layoutController.deleteLayout)

module.exports = router;
