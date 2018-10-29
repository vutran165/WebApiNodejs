module.exports = (app) => {
    const express = require('express');
    // const serviceRouter = express.Router();
    // const contactRouter = express.Router();
    // const projectRouter = express.Router();


    const serviceController = require('../controllers/service.controller');
    const contactController = require('../controllers/contact.controller');
    const projectController = require('../controllers/project.controller');

    //service
    app.get('/service', serviceController.getData);
    app.get('/service/:id', serviceController.getDataById);
    app.post('/create', serviceController.createItem);
    app.put('/edit/:id', serviceController.editItem);
    app.delete('/delete/:id', serviceController.deleteItem);

    //contact
    app.get('/contact', contactController.getData);
    app.get('/contact/:id', contactController.getDataById);
    app.post('/create', contactController.createItem);
    app.put('/edit/:id', contactController.editItem);
    app.delete('/delete/:id', contactController.deleteItem);

    //project
    app.get('/contact', projectController.getData);
    app.get('/contact/:id', projectController.getDataById);
    app.post('/create', projectController.createItem);
    app.put('/edit/:id', projectController.editItem);
    app.delete('/delete/:id', projectController.deleteItem);

}


