const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adviceSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    created_at: { type: Date, default: Date.now },
    content:{
        type:String,
        required: true
    }
});
const adviceModel = mongoose.model('advice', adviceSchema);
module.exports = adviceModel;