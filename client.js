const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');
  // Display a success message when it connects
  conn.on('connect', () => {
    console.log('You\'ve connected!');
    conn.write('Name: JDK');
    // setTimeout(() => {conn.write('Move: up')}, 50);
    // setInterval(() => {conn.write('Move: left')}, 100);
  });

  // Snarky message when you connect and timeout
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;