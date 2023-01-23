/* 
○ Registrar: Agregar una nueva cita de una atención veterinaria que debe incluir:
■ Nombre del animal
■ Edad
■ Tipo de animal
■ Color del animal
■ Enfermedad
○ Leer: Mostrar por consola todas las citas registradas.

 */

const fs = require("fs");

const register = (petName, age, type, color, diagnosis) => {
  const appointment = JSON.parse(
    fs.readFileSync("citas.json", (encoding = "utf8"))
  );
  appointment.push({ petName, age, type, color, diagnosis });

  fs.writeFileSync(`citas.json`, JSON.stringify(appointment));
};

const read = () => {
  const content = fs.readFileSync("citas.json", (encoding = "utf8"));
  console.log(content);
};

const deleteJSON = (fileName) => {
  fs.writeFileSync(fileName, "[]");
};

module.exports = { register, read };
// module.exports = { deleteJSON };
