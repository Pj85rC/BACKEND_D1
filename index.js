const { register, read } = require("./operaciones");

const arguments = process.argv.slice(2);
const operations = arguments[0];

if (operations === "register") {
  register(
    arguments[1],
    arguments[2],
    arguments[3],
    arguments[4],
    arguments[5]
  );
}
if (operations === "read") {
  read();
}
