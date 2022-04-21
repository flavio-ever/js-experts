const { describe, it, before, beforeEach, afterEach } = require('mocha')
const { expect } = require('chai')
const { join } = require('path')
const sinon = require('sinon')

const CarService = require('../../src/service/carService')

const carDatabase = join(__dirname, './../../database', 'cars.json')

const mocks = {
    validCar: require('../mocks/valid-car.json'),
    validCarCategory: require('../mocks/valid-carCategory.json'),
    validCustomer: require('../mocks/valid-customer.json')
}

// BDD é tudo mais falado, mais semantico (expect padrao do bdd)
describe('CarService Suite Tests', () => {
    let carService = {}
    let sandBox = {}

    before(() => {
        carService = new CarService({
            cars: carDatabase
        })
    })

    beforeEach(() => {
        sandBox = sinon.createSandbox()
    })

    afterEach(() => {
        sandBox.restore()
    })

    it('should retrive random position from an array', () => {
        const data = [0, 1, 2, 3, 4]
        const result = carService.getRandomPositionFromArray(data)

        // EQ("="), GTE(">="), GT(">"), LT("<"), LTE("<=");
        expect(result).to.be.lte(data.length).and.be.gte(0)
    })

    it('should choose the first id from carIds in carCategory', () => {
        const carCategory = mocks.validCarCategory
        const carIdIndex = 0

        sandBox.stub(
            carService,
            carService.getRandomPositionFromArray.name
        ).returns(carIdIndex)

        const result = carService.chooseRandomCar(carCategory)
        const expected = carCategory.carIds[carIdIndex]

        expect(carService.getRandomPositionFromArray.calledOnce).to.be.ok
        expect(result).to.be.equal(expected)
    })

    it('given a carCategory it should return an available', async () => {
        const car = mocks.validCar
         const carCategory = Object.create(mocks.validCarCategory)
        carCategory.carIds = [car.id]

        sandBox.stub(
            carService.carRepository,
            carService.carRepository.find.name
        ).resolves(car)

        sandBox.spy(
            carService,
            carService.chooseRandomCar.name
        )

        const result = await carService.getAvailableCar(carCategory)
        const expected = car

        expect(carService.chooseRandomCar.calledOnce).to.be.ok
        expect(carService.carRepository.find.calledWithExactly(car.id)).to.be.ok
        expect(result).to.be.deep.equal(expected)
    })
})