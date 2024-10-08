const jwt = require('jsonwebtoken')
const mangoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mangoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Chris',
    email: 'newTest@gmil.com',
    password: 'testpasdsword',
    age: 29,
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mangoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Chris2',
    email: 'newTest2@gmil.com',
    password: 'test2pasdsword',
    age: 29,
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mangoose.Types.ObjectId(),
    description: 'First task',
    completed: false,
    owner: userOneId
}

const taskTwo = {
    _id: new mangoose.Types.ObjectId(),
    description: 'Second task',
    completed: true,
    owner: userOneId
}

const taskThree = {
    _id: new mangoose.Types.ObjectId(),
    description: 'Third task',
    completed: true,
    owner: userTwoId
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}