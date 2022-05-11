const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String',
        required: true,
        unique: true
    },
    gender: String,
    status: String,
}, {collection: 'Ayan' } )

module.exports = mongoose.model('Ayan', userSchema);

//module.exports = new Schema({..}, { collection: 'Ayan' }

