const stdin = process.stdin;
let connection;

const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    if (key === '\u0003') { // if press ctrl + c
      process.exit();
    }
    if (key === 'w') { // if press 'w' key
      conn.write("Move: up");
    }
    if (key === 'a') { // if press 'a' key
      conn.write("Move: left");
    }
    if (key === 's') { // if press 's' key
      conn.write("Move: down");
    }
    if (key === 'd') { // if press 'd' key
      conn.write("Move: right");
    }
    if (key === 'g') {
      conn.write("Say: GG")
    }
    if (key === 'h') {
      conn.write("Say: HAHA!");
    }
    if (key === 'j') {
      conn.write("Say: 2Snek 2Furious");
    }
    if (key === 'k') {
      conn.write("Say: Hello friends!");
    }
    if (key === 'l') {
      conn.write("Say: Nice Shot!");
    }
  });

  return stdin;
};

module.exports = setupInput;