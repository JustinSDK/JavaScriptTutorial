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
        throw e;
    }
}

c();

