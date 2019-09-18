// 可透過物件以 key : value（CSS）形式來設定樣式
function css(elem, props) {	    
	Object.keys(props)
	      .forEach(name => elem.style[name] = props[name]);
}

// 取得元素確實位置
function offset(elem) {
    let x = 0;
    let y = 0;
    for(let e = elem; e; e = e.offsetParent) {
        x += e.offsetLeft;
        y += e.offsetTop;
    }

    //  修正捲軸區域的量
    for(let e = elem.parentNode; e && e != document.body; e = e.parentNode) {
        if(e.scrollLeft) {
            x -= e.scrollLeft;
        }
        if(e.scrollTop) {
            y -= e.scrollTop;
        }
    }

    return { 
        x, 
        y, 
        toString() {
            return `(${this.x}, ${this.y})`;
        }
    };
}

function computedStyle(elem, name, pseudoClz = null) {
	return window.getComputedStyle(elem, pseudoClz)[name];
}

// 記錄先前 display 值
let previousDisplays = new WeakMap();

// 顯示元素
function display(elem, pseudoClz = null) {
    if(previousDisplays.has(elem)) {
        elem.style.display = previousDisplays.get(elem);
        previousDisplays.delete(elem);
    }
    else if(computedStyle(elem, 'display', pseudoClz) === 'none') {
        // 在 DOM 樹上建立元素，取得 display 預設值後移除
        let node = document.createElement(elem.nodeName);
        document.body.appendChild(node);
        elem.style.display = computedStyle(node, 'display', pseudoClz);
        document.body.removeChild(node);
    }
}

// 隱藏元素
function none(elem, pseudoClz = null) {
    previousDisplays.set(elem, computedStyle(elem, 'display', pseudoClz));
    elem.style.display = 'none';
}

// 取得透明度的數字
function opacity(elem, pseudoClz = null) {
    let opt = computedStyle(elem, 'opacity', pseudoClz);
    return opt === '' ? 1 : Number(opt);
}

// 記錄元素先前的不透明度
let previousOpacities = new WeakMap();

//speed 是動畫總時間，step 是動畫數
// 淡出
function fadeOut(elem, speed = 5000, steps = 10, pseudoClz = null) {
    previousOpacities.set(elem, opacity(elem, pseudoClz));
        
    let opt = previousOpacities.get(elem); // 取得不透明度
    let timeInterval = speed / steps;      // 每次的淡出間隔
    let valueStep = opt / steps;           // 每次淡出要減去的不透明度

    // 定時減去不透明度
    setTimeout(function next() {
        opt -= valueStep;
        if(opt > 0) {
        	elem.style.opacity = opt;
            setTimeout(next, timeInterval);
        }
        else {
            elem.style.opacity = 0;
        }
    }, timeInterval);
} 

// 淡入
function fadeIn(elem, speed = 5000, steps = 10) {
    // 取得元素初始的不透明度作為目標值
    let targetValue = previousOpacities.get(elem) || 1;
    previousOpacities.delete(elem);

    let timeInterval = speed / steps;     // 每次的淡入間隔
    let valueStep = targetValue / steps;  // 每次淡入要增加的不透明度

    let opt = 0;
    setTimeout(function next() {
        opt += valueStep;
        if(opt < targetValue) {
        	elem.style.opacity = opt;
            setTimeout(next, timeInterval);
        }
        else {
        	elem.style.opacity = targetValue;
        }
    }, timeInterval);
}  

// 是否有指定類別
function hasClass(elem, clz) {
    return elem.classList.contains(clz);
}

// 新增類別
function addClass(elem, clz) {
    elem.classList.add(clz);
}

// 移除類別
function removeClass(elem, clz) {
    elem.classList.remove(clz);
}

function switchClass(elem, clz1, clz2) {
    let clzList = elem.classList;
    if(clzList.contains(clz1)) {
        clzList.replace(clz1, clz2);
    }
    else if(clzList.contains(clz2)) {
        clzList.replace(clz2, clz1);
    }
}

// 集中取得維度用的方法
class Dimension {
    static screen() {
        return {
            width: screen.width,
            height: screen.height
        };
    }

    static screenAvail() {
        return {
            width: screen.availWidth,
            height: screen.availHeight
        };        
    }

    static browser() {
        return {
            width: window.outerWidth,
            height: window.outerHeight
        };
    }

    static html() {
        return {
            width: window.documentElement.scrollWidth,
            height: window.documentElement.scrollHeight
        };        
    }

    static body() {
        return {
            width: window.body.scrollWidth,
            height: window.body.scrollHeight
        };        
    }

    static viewport() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };        
    }
}

// 集中取得座標用的方法
class Coordinate {
    static browser() {
        return {
            x: window.screenX,
            y: window.screenY
        };                
    }

    static scroll() {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        };        
    }
}

export {css, offset, none, display, fadeOut, fadeIn};
export {hasClass, addClass, removeClass, switchClass};
export {Dimension, Coordinate};