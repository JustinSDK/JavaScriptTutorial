const INTERVAL = 1000;
const TOTAL_STEP = 10;

function tortoise(step = 1) {
    if(step < TOTAL_STEP) {
        console.log(`烏龜跑了 ${step} 步...`);        
        setTimeout(tortoise, INTERVAL, step + 1);
    } else {
        console.log('烏龜抵達終點！');
    }
}

function hare(step = 2) {
    if(step < TOTAL_STEP) {
        let running = Math.ceil(Math.random() * 10) % 2;
        if(running) {
            console.log(`兔子跑了 ${step} 步...`);
            setTimeout(hare, INTERVAL, step + 2);
        }
        else {
            console.log('兔子睡著了zzzz');
            setTimeout(hare, INTERVAL, step);
        }
    }
    else {
        console.log('兔子抵達終點！');
    }
}

console.log('龜兔賽跑開始...');
setTimeout(tortoise, INTERVAL);
setTimeout(hare, INTERVAL);