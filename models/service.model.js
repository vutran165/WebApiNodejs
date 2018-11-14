const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ServiceModel = new Schema({
    id: { type: String, required: true, max: 20 },
    content: { type: String, required: true, max: 500 },
    note: { type: String, required: false, max: 500 },
    create_date: { type: String, required: true },
    status: {type: Boolean, required: false},
    imagePath: { type: String, required: false, max: 200 },
	title: { type: String, required: true, max: 100 }
})

//export the model
module.exports = mongoose.model('services', ServiceModel)