const ContactModel = require('../models/contact.model');

exports.getData = function (req, res) {
    ContactModel.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

exports.getDataById = function (req, res) {
    ContactModel.findById(req.params.id).then(item => {
        if (!item) {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            });
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
        });
    })
}

exports.createItem = function (req, res) {
    let item = new ContactModel({
        id: '121212',
        email: '{ type: String, required: false, max: 200 }',
        name: '{ type: String, required: false, max: 100 }',
        content: '{ type: String, required: false, max: 1000 }',
        create_date: '{ type: String, required: true }',
        modified_date: "{ type: String, required: false }",
        status: true,
        phone: '{type: String, required: false, max: 15}'
    })

    item.save().then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            message: err.message || "Some error from server!!!"
        })
    })
};

exports.editItem = function (req, res) {
    ContactModel.findByIdAndUpdate(req.params.id, {
        //do something
    }, { new: true }).then(item => {
        if (!item) {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            });
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
    ContactModel.findByIdAndRemove(req.params.id).then(item => {
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


