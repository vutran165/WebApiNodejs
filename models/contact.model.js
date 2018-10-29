const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactModel = new Schema({
    id: { type: String, required: true, max: 20 },
    email: { type: String, required: false, max: 200 },
    name: { type: String, required: false, max: 100 },
    content: { type: String, required: false, max: 1000 },
    create_date: { type: String, required: true },
    modified_date: { type: String, required: false },
    status: {type: Boolean, required: false},
    phone: {type: String, required: false, max: 15}
})

module.exports = mongoose.model('contact', ContactModel)
