
const ServiceModel = require('../models/service.model');
const pagination = require('../helper/pagination');

exports.getData = function (req, res) {

    console.log(req);

    pageNo = Number(req.query.pageNo);
    if (isNaN(pageNo) == true) {
        pageNo = 1;
    }
    pageSize = 5;

    ServiceModel.find({})
        .skip((pageNo * pageSize) - pageSize)
        .limit(pageSize).exec(function (err, data) {
            ServiceModel.countDocuments().exec(function (err, count) {
                if (err) return next(err);
                res.send({
                    pagingObj: pagination.pagination(pageNo, pageSize, count),
                    data: data,
                })
            })
        })
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
            });
        };
        return res.status(500).send({
            message: "Error retrieving Customer with id"
        })
    })
}

exports.createItem = function (req, res) {
    console.log(req);
    // let item = req;
    let item = new ServiceModel({
        id: '11212+++',
        content: req.body.content,
        note: req.body.note,
        create_date: 'req.body.create_date',
        status: req.body.status,
        imagePath: 'req.body.imagePath',
        title: req.body.title
    });
    //save item
    item.save().then(() => {

        res.send(JSON.stringify({
            satus: 200,
            satusCode: 'Ok'
        }));
    }, function () {

    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the item." + req.params.id
        })
    })
}

exports.editItem = function (req, res) {
    console.log(req);
    ServiceModel.findByIdAndUpdate(req.params.id, {
        // do somehting
        id: req.body.id,
        content: req.body.content,
        note: req.body.note,
        status: req.body.status,
        imagePath: req.body.imagePath,
        title: req.body.title,
    }, { new: true }).then(item => {
        if (!item) {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            });
        }
        res.send(JSON.stringify({
            status: 304,
            message: 'Modified'
        }));
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating item with id" + req.params.id
        })
    })

}

exports.deleteItem = function (req, res) {
    ServiceModel.findOneAndRemove(req.params.id).then(item => {
        if (!item) {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            });
        }
        res.send(JSON.stringify({
            status: 200,
            message: 'Ok'
        }));
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "item not found with id" + req.params.id
            })
        }
        return res.status(500).send({
            message: "Could not delete item with id" + req.params.id
        })
    })
}


