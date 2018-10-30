const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectModel = new Schema({
    id: { type: String, required: true, max: 20 },
    content: { type: String, required: true },
    title: { type: String, required: true, max: 100 },
    note: { type: String, required: false, max: 500 },
    create_date: { type: String, required: true },
    modified_date: { type: String, required: false },
    status: { type: Boolean, required: false },
    imagePath: { type: String, required: false, max: 200 },
    serviceId: { type: String, required: false }
})

module.exports = mongoose.model('projects', ProjectModel)