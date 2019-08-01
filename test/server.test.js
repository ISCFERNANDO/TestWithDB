const { suma, getGastos } = require("../src/server");

test("Add 3 + 5", () => {
  expect(suma(3, 5)).toBe(8);
});

test("Test connection", async () => {
  let data = await getGastos();
  for (const item of data) {
    let keys = Object.keys(item);
    let values = Object.values(item);
    expect(keys).toEqual(['id', 'descripcion', 'gastado', 'fechaGasto']);

    //validar que no haya ningun valor nulo
    for (const value of values) {
      expect(value).not.toBe(null);
    }    
  }
});
