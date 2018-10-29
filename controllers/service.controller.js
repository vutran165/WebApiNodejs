const Service = require('../models/service.model');
const data = require('../models/data');

exports.getData = function (req, res) {

}

exports.getDataById = function (req, res) {
    Service.findById(req.params.id, function(err, item){
        if(err) {
            return next(err);
        }
        res.send(item);
    })
}

exports.createItem = function (req, res) {
    // let item = new Service(
    //     {
    //         id: req.body.id,
    //         content: req.body.content,
    //         note: req.body.note,
    //         create_date: req.body.create_date,
    //         status: req.body.status,
    //         imagePath: req.body.imagePath,
    //     }
    // )
    let item = serviceData;

    item.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('successfully');
    })
}

exports.editItem = function (req, res) {

}

exports.deleteItem = function (req, res) {

}


