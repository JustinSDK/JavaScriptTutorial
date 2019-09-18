function a() {
    let text = undefined;
    return text.toUpperCase();
}

function b() {
    a();
}

function c() {
    try {
        b();
    }
    catch(e) {
        throw new Error(e);
    }
}

try {
    c();
}
catch(e) {
    console.log(e.stack.constructor);
}
