module.exports = function (app) {
    const serviceController = require('../controllers/service.controller');
    const contactController = require('../controllers/contact.controller');
    const projectController = require('../controllers/project.controller');

    //service
    app.get('/service', serviceController.getData);
    // app.get('/service', function (req, res) {
    //     console.log(req);
    //     req.xhr;
    //     serviceController.getData();
    //     res.writeHead(200, { 'Content-Type': 'text/json; charset=utf-8' })
    // });

    app.get('/service/:id', serviceController.getDataById);
    app.post('/service', serviceController.createItem);
    app.put('/service/:id', serviceController.editItem);
    app.delete('/service/:id', serviceController.deleteItem);

    //contact
    app.get('/contact', contactController.getData);
    app.get('/contact/:id', contactController.getDataById);
    app.post('/contact', contactController.createItem);
    app.put('/contact/:id', contactController.editItem);
    app.delete('/contact/:id', contactController.deleteItem);

    //project
    app.get('/project', projectController.getData);
    app.get('/project/:id', projectController.getDataById);
    app.post('/project', projectController.createItem);
    app.put('/project/:id', projectController.editItem);
    app.delete('/project/:id', projectController.deleteItem);

}


