const suma = require("../src/server");

test("Add 3 + 5", () => {
  expect(suma(3, 5)).toBe(8);
});
