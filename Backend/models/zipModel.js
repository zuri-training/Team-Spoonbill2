const mongoose = require('mongoose');


const zipSchema = new mongoose.Schema({
    favicon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Favicon',
    },
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    
});

const Zip = mongoose.model('Zip', zipSchema);
module.exports = Zip;