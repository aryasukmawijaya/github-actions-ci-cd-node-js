const request = require("supertest");
const app = require("../app");

test("Test / route", () => {
	return request(app)
		.get("/")
		.then(response => {
			expect(response.text).toBe("Hello World!");
		});
});

test("Test /arya route", () => {
	return request(app)
		.get("/arya")
		.then(response => {
			expect(response.text).toBe("hello arya");
		});
});