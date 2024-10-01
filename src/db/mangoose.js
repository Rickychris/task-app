const mongoose = require('mongoose');

const url = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/task-manager-api';

async function main() {
    await mongoose.connect(url);
    console.log('Connected successfully to server');

    

    // const user = new User({
    //     name: '   Chris',
    //     email: '   tEst@gmil.com  ',
    //     password: 'testpasdsword',
    //     age: 29
    // });
    // const result = await user.save();
    // console.log(result);



    // const task = new Task({
    //     description: '  Eat Breakfast  ',
    //     // completed: false
    // });
    // const result = await task.save();    
    // console.log(result);
    // console.log(err);
}

main()
    .catch(err => console.log(err))