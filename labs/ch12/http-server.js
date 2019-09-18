const fs = require('fs');

const port = Number(process.argv[2]);

const express = require('express');
const app = express();

app.use(express.static(__dirname));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
})); 

const fileupload = require('express-fileupload');
app.use(fileupload());

require('express-ws')(app);

app.get('/xhr/books', function(req, res) {
    let result;
    switch(req.query.category) {
        case 'theory':
            result = '<option value="algorithm">常見演算</option>\n' +
                     '<option value="graphic">電腦圖學</option>\n' +
                     '<option value="pattern">設計模式</option>\n';
            break;
        case 'language':
            result = '<option value="c">C 語言</option>\n' +
                     '<option value="cpp">C++</option>\n' +
                     '<option value="java">Java</option>\n' +
                     '<option value="python">Python</option>\n' +
                     '<option value="javascript">JavaScript</option>\n';
            break;
        case 'web':
            result = '<option value="servlet">Servlet</option>\n' +
                     '<option value="jsp">JSP</option>\n' +
                     '<option value="struts">Struts</option>\n' +
                     '<option value="springmvc">Spring MVC</option>\n';
            break;
        default:
            result = '<option>-- 沒有次選項 --</option>\n';
    }
      
    res.send(`<select>\n${result}</select>`);
});

app.get('/xhr/bookmarks', function(req, res) {
    res.send(
        ['https://caterpillar.onlyfun.net', 'https://openhome.cc'].includes(req.query.url)
    );
});
app.post('/((xhr)|(fetch))/bookmarks', function(req, res) {
    res.send(
        ['https://caterpillar.onlyfun.net', 'https://openhome.cc'].includes(req.body.url)
    );
});

app.post('/xhr/upload', function(req, res) {
    let photo = req.files.photo;
    fs.writeFile(photo.name, photo.data, err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`Upload ${photo.name} successfully.`);
        }
    });

    res.send("File Uploaded");
});

app.get('/xhr/books2', function(req, res) {
    res.set('Content-Type', 'text/xml');

    let result;
    switch(req.query.category) {
        case 'theory':
            result = '<option value="algorithm">常見演算</option>\n' +
                     '<option value="graphic">電腦圖學</option>\n' +
                     '<option value="pattern">設計模式</option>\n';
            break;
        case 'language':
            result = '<option value="c">C 語言</option>\n' +
                     '<option value="cpp">C++</option>\n' +
                     '<option value="java">Java</option>\n' +
                     '<option value="python">Python</option>\n' +
                     '<option value="javascript">JavaScript</option>\n';
            break;
        case 'web':
            result = '<option value="servlet">Servlet</option>\n' +
                     '<option value="jsp">JSP</option>\n' +
                     '<option value="struts">Struts</option>\n' +
                     '<option value="springmvc">Spring MVC</option>\n';
            break;
        default:
            result = '<option>-- 沒有次選項 --</option>\n';
    }
      
    res.send(`<?xml version="1.0" encoding="UTF-8"?>\n<select>\n${result}</select>`);
});

app.get('/xhr/suggest', function(req, res) {
    res.set('Content-Type', 'application/json');

    let keywords = ['caterpillar', 'car', 'ceo', 'c++', 'justin', 'java', 'javascript'];
    
    res.send(JSON.stringify({
        keywords: keywords.filter(keyword => keyword.startsWith(req.query.keyword))
    }));
});

app.get('/sse/number', function(req, res) {
    res.set('Content-Type', 'text/event-stream');
    // res.set('Cache-Control', 'no-cache');
    // res.set('Connection', 'keep-alive');
    
    let interval = setInterval(function () {
        res.write(`data: ${Math.random()}\n\n`);
    }, 1000);

    req.connection.addListener("close", function () {
        clearInterval(interval);
    }, false);
});

app.ws('/ws/foo', function (ws){
    ws.send('連線已建立');
    ws.on('message', function (msg) {
        ws.send(`echo: ${msg}`);
    });

    let interval = setInterval(function () {
        ws.send(`${Math.random()}`);
    }, 5000);

    ws.on('close', function() {
        clearInterval(interval);
    });
})

app.listen(port);

console.log(`The http server is listening on port ${port}.`);