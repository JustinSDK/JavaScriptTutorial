const port = Number(process.argv[2]);

const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen(port);

console.log(`The http server is listening on port ${port}.`);