const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
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
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task