const express =  require('express');
const serviceRouter = express.Router();
const contactRouter = express.Router();
const projectRouter = express.Router();


const serviceController = require('../controllers/service.controller');
const contactController = require('../controllers/contact.controller');
const projectController = require('../controllers/project.controller');

//service
serviceRouter.get('/service', serviceController.getData);
serviceRouter.get('/service/:id', serviceController.getDataById);
serviceRouter.post('/create', serviceController.createItem);
serviceRouter.put('/edit/:id', serviceController.editItem);
serviceRouter.delete('/delete/:id', serviceController.deleteItem);

//contact
contactRouter.get('/contact', contactController.getData);
contactRouter.get('/contact/:id', contactController.getDataById);
contactRouter.post('/create', contactController.createItem);
contactRouter.put('/edit/:id', contactController.editItem);
contactRouter.delete('/delete/:id', contactController.deleteItem);

//project
projectRouter.get('/contact', projectController.getData);
projectRouter.get('/contact/:id', projectController.getDataById);
projectRouter.post('/create', projectController.createItem);
projectRouter.put('/edit/:id', projectController.editItem);
projectRouter.delete('/delete/:id', projectController.deleteItem);

