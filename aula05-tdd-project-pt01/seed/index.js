const faker = require('faker')

const Car = require('./../src/entities/car')
const CarCategory = require('./../src/entities/carCategory')
const Customer = require('./../src/entities/customer')

console.log({
    id: faker.random.uuid(),
    name: faker.name.firstName()
})