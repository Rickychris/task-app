const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionURL);

const databaseName = 'task-manager';

// const id = new ObjectId();
// console.log(id);
// console.log(id.id);


// console.log(id.getTimestamp());

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'John',
    //     age: 29
    // }).then((result) => {

    //     console.log(result);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Judo',
    //         age: 29
    //     },
    //     {
    //         name: 'Wick',
    //         age: 29
    //     }
    // ]).then((result) => {
    //     console.log(result);
    // })


    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Pay rent',
    //         completed: true
    //     },
    //     {
    //         description: 'get groceries',
    //         completed: false
    //     }
    // ]).then((result) => {
    //     console.log(result);
    // })

    // db.collection('tasks').findOne({
    //     description: 'Pay rent'
    // }).then((result) => {
    //     console.log(result);
    // })

    // db.collection('users').updateOne({
    //     name: 'Chris'
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // })
    // db.collection('users').find({
    //     age: 29
    // }).toArray().then((result) => {
    //     console.log(result);
    // })

    // db.collection('users').countDocuments({
    //     age: 29
    // }).then((result) => {
    //     console.log(result);
    // })

    // db.collection('users').deleteOne({
    //     name: 'Wick'
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('tasks').deleteOne({
        description: 'Pay rent'
    }).then((result) => {
        console.log(result);
    })

    // db.collection('users').deleteMany({
    //     age: 29
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
    // const tasks = db.collection('tasks');
}

main()
    .then(console.log)
    .catch(console.error)
    // .finally(() => client.close())