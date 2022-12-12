const mongoose = require('mongoose');

const faviconSchema = new mongoose.Schema({
    image: {
        type: Buffer,
        required:true
    },
    html: {
        type: String,
        required
    },
    user: {
        type: mongoose.Schema.Types.ObjctId,
        ref:'User'
    },
});

const Favicon = mongoose.model('Favicon', faviconSchema);
module.exports = Favicon;