const ProjectModel = require('../models/project.model');

exports.getData = function (req, res) {

}

exports.getDataById = function (req, res) {

}

exports.createItem = function (req, res) {
    let item = new ProjectModel({
        ///
        id: 'req.body.id',
        content: 'req.body.content',
        title: 'req.body.content',
        note: 'req.body.content',
        create_date: 'req.body.content',
        modified_date: 'req.body.content',
        status: true,
        imagePath: 'req.body.content',
        serviceId: 'req.body.content'
    });
    console.log(item);
    //save item
    item.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the item." + req.params.id
        })
    })

}

exports.editItem = function (req, res) {

}

exports.deleteItem = function (req, res) {

}


