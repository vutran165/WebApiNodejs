const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ServiceShema = new Schema({
    id: { type: String, required: true, max: 20 },
    content: { type: String, required: true, max: 500 },
    note: { type: String, required: false, max: 500 },
    create_date: { type: String, required: true }
})