const calculator = require("./calculator")

describe("calculator unit tests", () => {
	it("adds", () => {
		expect(calculator.add(2, 2)).toBe(4)
		expect(calculator.add(3, 2)).toBe(5)
		// try it with a zero
		expect(calculator.add(1, 0)).toBe(1)
		// try it with a negative number
		expect(calculator.add(-1, 1)).toBe(0)
		// try it with a missing parameter
		expect(calculator.add(1)).toBe(1)
		// try it with no parameters
		expect(calculator.add()).toBe(0)
		// refactor with new functionality
		expect(calculator.add(2, 2, 2)).toBe(6)
		expect(calculator.add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45)
	})

	it("subtracts", () => {
		expect(calculator.subtract(2, 2)).toBe(0)
		expect(calculator.subtract(3, 2)).toBe(1)
		expect(calculator.subtract(1, 0)).toBe(1)
		expect(calculator.subtract(-1, 1)).toBe(-2)
		expect(calculator.subtract(-1, -2)).toBe(1)
		expect(calculator.subtract(1)).toBe(1)
		expect(calculator.subtract()).toBe(0)
	})

	it("multiplies", () => {
		expect(calculator.multiply(2, 2)).toBe(4)
		expect(calculator.multiply(3, 2)).toBe(6)
		expect(calculator.multiply(1, 0)).toBe(0)
		expect(calculator.multiply(-1, 1)).toBe(-1)
		expect(calculator.multiply(-1, -2)).toBe(2)
		expect(calculator.multiply(1)).toBe(0)
		expect(calculator.multiply()).toBe(0)
	})

	it("divides", () => {
		expect(calculator.divide(2, 2)).toBe(1)
		expect(calculator.divide(3, 2)).toBe(1.5)
		// when asserting for a throw, the call has to be wrapped in another function,
		// so the throw is under Jest's control (so it can watch for it specifically)
		expect(() => calculator.divide(1, 0)).toThrow()
		expect(calculator.divide(-1, 1)).toBe(-1)
		expect(calculator.divide(-1, -2)).toBe(0.5)
		expect(calculator.divide(1)).toBe(1)
		expect(calculator.divide()).toBe(1)
		expect(() => calculator.divide("hello", "world")).toThrow()
	})
})
