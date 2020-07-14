const calculator = require("./calculator")

describe("calculator unit tests", () => {
	it("adds", () => {
		expect(calculator.sum(2, 2)).toBe(4)
		expect(calculator.sum(3, 2)).toBe(5)
		// try it with a zero
		expect(calculator.sum(1, 0)).toBe(1)
		// try it with a negative number
		expect(calculator.sum(-1, 1)).toBe(0)
		// try it with a missing parameter
		expect(calculator.sum(1)).toBe(1)
		// try it with no parameters
		expect(calculator.sum()).toBe(0)
		// refactor to support more parameters
		expect(calculator.sum(2, 2, 2)).toBe(6)
		expect(calculator.sum(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45)
	})

	it("subtracts", () => {
		expect(calculator.difference(2, 2)).toBe(0)
		expect(calculator.difference(3, 2)).toBe(1)
		expect(calculator.difference(1, 0)).toBe(1)
		expect(calculator.difference(-1, 1)).toBe(-2)
		expect(calculator.difference(-1, -2)).toBe(1)
		expect(calculator.difference(1)).toBe(1)
		expect(calculator.difference()).toBe(0)
		// refactor to support more parameters
		expect(calculator.difference(2, 2, 2)).toBe(-2)
		expect(calculator.difference(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(-43)
	})

	it("multiplies", () => {
		expect(calculator.product(2, 2)).toBe(4)
		expect(calculator.product(3, 2)).toBe(6)
		expect(calculator.product(1, 0)).toBe(0)
		expect(calculator.product(-1, 1)).toBe(-1)
		expect(calculator.product(1)).toBe(1)
		expect(calculator.product()).toBe(1)
		// refactor to support more parameters
		expect(calculator.product(2, 2, 2)).toBe(8)
		expect(calculator.product(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(362880)
	})

	it("divides", () => {
		expect(calculator.quotient(2, 2)).toBe(1)
		expect(calculator.quotient(3, 2)).toBe(1.5)
		expect(() => calculator.quotient(1, 0)).toThrow()
		expect(calculator.quotient(-1, 1)).toBe(-1)
		expect(calculator.quotient(1)).toBe(1)
		expect(calculator.quotient()).toBe(0)
		// refactor to support more parameters
		expect(calculator.quotient(2, 2, 2)).toBe(0.5)
		expect(calculator.quotient(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(0.0000027557319223985893)
		expect(calculator.quotient(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBeLessThan(1)
	})

	it("parses", () => {
		expect(calculator.parse({
			sum: [1, 2, 3],
			difference: [3, 2, 1],
			product: [1, 2, 3],
			quotient: [2, 2, 2],
		// use `.toEqual` rather than `.toBe` for non-primitive data types
		})).toEqual({
			sum: 6,
			difference: 0,
			product: 6,
			quotient: 0.5,
		})
	})
})
