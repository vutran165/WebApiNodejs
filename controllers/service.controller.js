const ServiceModel = require('../models/service.model');
const data = require('../models/data');

exports.getData = function (req, res) {

}

exports.getDataById = function (req, res) {
    Service.findById(req.params.id).then(
        item => {
            if (!item) {
                return res.status(404).send({
                    message: "Customer not found with id " + req.params.customerId
                })
            }
            res.send(item);
        }
    ).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            })
        }
        return res.status(500).send({
            message: "Error retrieving Customer with id"
        })
    })
}

exports.createItem = function (req, res) {
    // let item = serviceData[0];
    let item = new ServiceModel({
        id: 'req.body.id',
        content: 'req.body.content',
        note: 'req.body.note',
        create_date: 'req.body.create_date',
        status: true,
        imagePath: 'req.body.imagePath',
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


