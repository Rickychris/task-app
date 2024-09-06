const mongoose = require('mongoose');
const validator = require('validator');

const url = 'mongodb://127.0.0.1:27017/task-manager-api';

async function main() {
    await mongoose.connect(url);
    console.log('Connected successfully to server');

    // const User = mongoose.model('User', {
    //     name: {
    //         type: String,
    //         trim: true,
    //         required: true
    //     },
    //     email: {
    //         type: String,
    //         required: true,
    //         trim: true,
    //         lowercase: true,
    //         // unique: true,
    //         validate(value) {
    //             if (!validator.isEmail(value)) {
    //                 throw new Error('Email is invalid');
    //             }
    //         }
    //     },
    //     password: {
    //         type: String,
    //         required: true,
    //         trim: true,
    //         minlength: 7,
    //         validate(value) {
    //             if (value.toLowerCase().includes('password')) {
    //                 throw new Error('Password cannot contain "password"');
    //             }
    //         }
    //     },
    //     age: {
    //         type: Number,
    //         default: 0,
    //         validate(value) {
    //             console.log(value);
    //             if (value < 0) {
    //                 throw new Error('Age must be a positive number');
    //             }
    //         }
    //     }
    // });

    // const user = new User({
    //     name: '   Chris',
    //     email: '   tEst@gmil.com  ',
    //     password: 'testpasdsword',
    //     age: 29
    // });
    // const result = await user.save();
    // console.log(result);

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

    const task = new Task({
        description: '  Eat Breakfast  ',
        // completed: false
    });
    const result = await task.save();
    console.log(result);
    // console.log(err);
}

main()
    .catch(err => console.log(err))