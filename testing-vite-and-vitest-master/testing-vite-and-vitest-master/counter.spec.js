import { setupCounter } from './counter.js'

describe('Counter functions suite', () => {

    it('setupCounter function with no click', () => {
        /// Arrange
        const elem = document.createElement('button')
        /// Act
        setupCounter(elem)
        /// Assert
        expect(elem.innerHTML).toEqual('count is 0')
    })

    it('setupCounter function with one click', () => {
        /// Arrange
        const elem = document.createElement('button')
        /// Act
        setupCounter(elem)
        elem.dispatchEvent(new Event('click'))

        /// Assert
        expect(elem.innerHTML).toEqual('count is 1')
    })

    it('setupCounter function with two clicks', () => {
        /// Arrange
        const elem = document.createElement('button')
        /// Act
        setupCounter(elem)
        elem.dispatchEvent(new Event('click'))
        elem.dispatchEvent(new Event('click'))

        /// Assert
        expect(elem.innerHTML).toEqual('count is 2')
    })

})