const ContactModel = require('../models/contact.model');

exports.getData = function (req, res) {

}

exports.getDataById = function (req, res) {

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
}

exports.editItem = function (req, res) {

}

exports.deleteItem = function (req, res) {

}


