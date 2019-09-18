let out;

function setOut(dom) {
    out = dom;
}

function print(message) {
    out.innerHTML += message;
}

function println(message) {
    out.innerHTML += `${message}<br>`;
}

export {setOut, print, println};