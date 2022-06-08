const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.181',
    port: 50541
  })

  conn.setEncoding('utf8');
  // Display a success message when it connects
  conn.on('connect', () => {
    console.log('You\'ve connected!')
  })
  // Snarky message when you connect and timeout
  conn.on('data', () => {
    console.log('you ded cuz you idled')
  });

  return conn;
};

console.log("Connecting ...");
connect();