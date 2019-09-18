const port = Number(process.argv[2]);

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:8080'
}));
app.use(express.static(__dirname));

app.listen(port, function() {
    console.log(`CORS-enabled web server listening on port ${port}`);
});