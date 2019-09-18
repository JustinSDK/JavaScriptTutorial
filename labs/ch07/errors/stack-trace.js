function a() {
    let text = undefined;
    return text.toUpperCase();
}

function b() {
    a();
}

function c() {
    b();
}

c();

