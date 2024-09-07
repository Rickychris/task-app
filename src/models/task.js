const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length < 3) {
                throw new Error('Task must be at least 3 characters long');
            }
        }
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = Task