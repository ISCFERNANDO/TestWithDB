const db = require("./lib/connectionMysql");

function suma(a, b) {
  return a + b;
}

async function getGastos() {
  let resultSet = await db.query("call get_gatos()");
  let gastos = resultSet[0].map(x => {
    return {
      id: x.id,
      descripcion: x.descripcion,
      gastado: x.gastado,
      fechaGasto: x.fechaGasto,
    };
  });
  return gastos;
}

module.exports = {
  suma,
  getGastos,
};
