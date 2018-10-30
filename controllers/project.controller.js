const ProjectModel = require('../models/project.model');

exports.getData = function (req, res) {
    ProjectModel.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: res.message
        })
    })

}

exports.getDataById = function (req, res) {
    ProjectModel.findById(req.params.id).then(item => {
        if (!item) {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            })
        }
        res.send(item);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            });
        }
        return res.status(500).send({
            message: "error retrieving item with id" + req.params.id
        })
    })
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
    ProjectModel.findByIdAndUpdate(req.params.id, {
        // do something
    }, { new: true }).then(item => {
        if (!item) {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            })
        }
        res.send(item);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            })
        }
        return res.status(500).send({
            message: "Error updating item with id" + req.params.id
        })
    })

}

exports.deleteItem = function (req, res) {
    ProjectModel.findByIdAndRemove(req.params.id).then(item => {
        if (!item) {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            });
        }
        res.send(item);
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete item with id" + req.params.id
        })
    })
}


