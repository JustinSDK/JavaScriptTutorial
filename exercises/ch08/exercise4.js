let fs = require('fs');

function readTxtFile(filename) {
    return new Promise(resolve => {
        fs.readFile(filename, function(_, content) {
            resolve(content.toString());
        });
    });
}

(async function() {
    let html = await readTxtFile('test.html');
    fs.writeFile(
        'test2.html', 
        html.replace(/<a.+>(<img.+>)<\/a>/g, '$1'), 
        err => console.log(err || '')
    );
})();