import { stringLengthChecker } from "../../src/stringLengthChecker"

describe("stringLengthChecker with diff of 1 : ", () => {
	test("abcd compare efgh to should return true", () => {
		const checker = stringLengthChecker("abcd")
		expect(checker("efgh")).toBe(true)
	})
	test("abcd compare efg to should return true", () => {
		const checker = stringLengthChecker("abcd")
		expect(checker("efg")).toBe(true)
	})
	test("abcd compare ef to should return true", () => {
		const checker = stringLengthChecker("abcd")
		expect(checker("ef")).toBe(false)
	})
	test("abcd compare e to should return true", () => {
		const checker = stringLengthChecker("abcd")
		expect(checker("e")).toBe(false)
	})
	test("abcd compare efghj to should return true", () => {
		const checker = stringLengthChecker("abcd", 1)
		expect(checker("efghj")).toBe(true)
	})
	test("abcd compare efghjk to should return false", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efghjk")).toBe(false)
	})
	test("abcd compare efghjkl to should return false", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efghjkl")).toBe(false)
	})
	test("nothing compare efghjkl to should return false", () => {
		const checker = stringLengthChecker()
		expect(checker("efghjkl")).toBe(false)
	})
})





describe("stringLengthChecker with diff of 2 : ", () => {
	const max = 2
	test("abcd compare efgh to should return true", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efgh")).toBe(true)
	})
	test("abcd compare efg to should return true", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efg")).toBe(true)
	})
	test("abcd compare ef to should return true", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("ef")).toBe(true)
	})
	test("abcd compare e to should return true", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("e")).toBe(false)
	})
	test("abcd compare efghj to should return true", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efghj")).toBe(true)
	})
	test("abcd compare efghjk to should return false", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efghjk")).toBe(true)
	})
	test("abcd compare efghjkl to should return false", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efghjkl")).toBe(false)
	})
})


describe("stringLengthChecker with diff of 3 : ", () => {
	const max = 3
	test("abcd compare efgh to should return true", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efgh")).toBe(true)
	})
	test("abcd compare efg to should return true", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efg")).toBe(true)
	})
	test("abcd compare ef to should return true", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("ef")).toBe(true)
	})
	test("abcd compare e to should return true", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("e")).toBe(true)
	})
	test("abcd compare efghj to should return true", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efghj")).toBe(true)
	})
	test("abcd compare efghjk to should return false", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efghjk")).toBe(true)
	})
	test("abcd compare efghjkl to should return false", () => {
		const checker = stringLengthChecker("abcd", max)
		expect(checker("efghjkl")).toBe(true)
	})
})