const INTERVAL = 1000;
const TOTAL_STEP = 10;

let tortoiseStep = 0;
let hareStep = 0;

console.log('龜兔賽跑開始...');
do {
    let time = Date.now();
    while(Date.now() - time < INTERVAL) {}

    tortoiseStep += 1;
    let running = Math.ceil(Math.random() * 10) % 2;
    if(running) {
        hareStep += 2;
    }
    else {
        console.log('兔子睡著了zzzz');
    }

    if(tortoiseStep < TOTAL_STEP) {
        console.log(`烏龜跑了 ${tortoiseStep}  步...`);
    } 
    else {
        console.log('烏龜抵達終點！');
    }
    
    if(hareStep < TOTAL_STEP) {
        console.log(`兔子跑了 ${hareStep}  步...`);
    }
    else {
        console.log('兔子抵達終點！');
    }
} while(tortoiseStep < TOTAL_STEP && hareStep < TOTAL_STEP);
