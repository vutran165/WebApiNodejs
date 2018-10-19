const express = require('express');
const router = express.Router();

const service_controller = require('../controllers/service.controller');


router.get('/', service_controller);

module.exports = router;