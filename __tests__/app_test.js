const request = require("supertest");
const app = require("../app");

test("It should response the GET method", () => {
	return request(app)
		.get("/arya")
		.then(response => {
			expect(response.text).toBe("hello arya");
		});
});