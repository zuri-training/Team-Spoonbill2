const mongoose = require('mongoose');

const faviconSchema = new mongoose.Schema({
    image: {
        type: Buffer,
        required:true
    },
    html: {
        type: String,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
});

const Favicon = mongoose.model('Favicon', faviconSchema);
module.exports = Favicon;