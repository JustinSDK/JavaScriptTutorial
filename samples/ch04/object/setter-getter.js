function object() {
    let obj_privates = {};
    let obj = {
        set name(value) {
            obj_privates.name = value.trim();
        },
        get name() {
            return obj_privates.name.toUpperCase();
        }
    };

    return obj;    
}

let obj = object();
obj.name = '   Justin   ';
console.log(`[${obj.name}]`); // 顯示 [Justin]