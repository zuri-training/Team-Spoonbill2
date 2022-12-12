const mongoose = require('mongoose');


const zipSchema = new mongoose.Schema({
    data: {
        type: Buffer,
        required: true,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
});

const Zip = mongoose.model('Zip', zipSchema);
module.exports = Zip;