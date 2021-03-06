const port = process.env.PORT || 3001;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const cors = require('./cors');

// Todas as requisições passarão pelo bodyParser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors);

server.listen(port, function() {
  console.log('Server listening on port ' + port);
}   );

module.exports = server;