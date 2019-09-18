import {addEvtOn, removeEvtOn} from './Evt.js';
import {css, offset, none, display, fadeOut, fadeIn, 
	    hasClass, addClass, removeClass, switchClass} from './Style.js';

// 標準化屬性名稱
const PROPS = new Map([
    ['for', 'htmlFor'],
    ['class', 'className'],
    ['readonly', 'readOnly'],
    ['maxlength', 'maxLength'],
    ['cellspacing', 'cellSpacing'],
    ['rowspan', 'rowSpan'],
    ['colspan', 'colSpan'],
    ['tabindex', 'tabIndex'],
    ['usemap', 'useMap'],
    ['frameborder', 'frameBorder']
]);

// 判斷元素的類型	

function isElementNode(elem) {
	return elem.nodeType === Node.ELEMENT_NODE;
}

function isTextNode(elem) {
	return elem.nodeType === Node.TEXT_NODE;
}

function isCommentNode(elem) {
	return elem.nodeType === Node.COMMENT_NODE;
}

function isInputNode(elem) {
	return elem.nodeName === 'INPUT';
}

class ElemCollection {
    // 建構時傳入原生 DOM 物件的 Array 清單
	constructor(elems) {
		this.elems = elems;
	}
	
	// 指定索引取得元素
	get(index = 0) {
		return this.elems[index];
	}
	
    // 包裹器管理的 DOM 物件個數
	size() {
		return this.elems.length;
	}
	
    // 包裹器中的 DOM 元素清單是否為空
	isEmpty() {
		return this.elems.length === 0;
	}
	
    // 逐一操作管理的 DOM 元素
	each(consume) {
		this.elems.forEach(consume);
		return this;
	}
	
    // 如果 value 為 undefined，傳回第一個 DOM 元素的 innerHTML 
    // 否則用 value 設定全部 DOM 元素之 innerHTML
	html(value) {
		let elems = this.elems;
        if(value === undefined) {
            return elems[0] && isElementNode(elems[0]) ? elems[0].innerHTML : null;
        }
        else {
            elems.filter(isElementNode)
	             .forEach(elem => elem.innerHTML = value);
            return this;
        }
	}

    // 如果 value 為 undefined，傳回第一個 DOM 元素的屬性對應之特性
    // 否則用 value 設定全部 DOM 元素之指定特性		
	attr(name, value) {
		let elems = this.elems;
		let propName = PROPS.has(name) ? PROPS.get(name) : name;
        if(value === undefined) {
            return elems[0] && !isTextNode(elems[0]) && !isCommentNode(elems[0]) ?
            		elems[0][propName] : undefined;
        }
        else {
        	elems.filter(elem => !isTextNode(elem) && !isCommentNode(elem))
        	     .forEach(elem => elem[propName] = value);
        	return this;
        } 		
	}

    // 如果 value 為 undefined，傳回第一個 input 元素的 value
    // 否則用 value 設定全部 input 元素的 value			
	val(value) {
		let elems = this.elems;
        // 先只處理 <input> 元素
        if(value === undefined) {
            return elems[0] && isInputNode(elems[0]) ? elems[0].value : null;
        }
        else {
        	elems.filter(isInputNode)
        	     .forEach(elem => elem.value = value);
        	return this;
        }		
	}

    // 如果只有一個父節點，將指定的 elemsCollection 管理之元素附加至該節點
    // 否則用複製 elemsCollection 管理之元素，再附加至各個父節點			
	append(elemsCollection) {
        let parents = this.elems;
        if(parents.length === 1) { // 只有一個父節點
            let parent = parents[0];
            elemsCollection.each(elem => parent.appendChild(elem));
        }
        else if(parents.length > 1){ // 有多個父節點
        	parents.forEach(parent => {
        		elemsCollection.each(elem => {
                    // 複製子節點
                    var container = document.createElement('div');
                    container.appendChild(elem);
                    container.innerHTML = container.innerHTML;
                    parent.appendChild(container.firstChild);
        		});
        	});
        }
        
		return this;
	}

	// 將目前管理中的元素附加至指定的 elemsCollection
	// 如果 elemsCollection 有多父節點，以複製的方式附加
	appendTo(elemsCollection) {
		elemsCollection.append(this);
		return this;
	}

    // 將管理之元素從 DOM 樹上移除		
	remove() {
		this.elems.forEach(elem => {
			elem.parentNode.removeChild(elem);
		});
		return this;
	}
	
    // 新增事件處理
	addEvt(type, handler, capture = false) {
		this.elems.forEach(elem => addEvtOn(elem, type, handler, capture));
		return this;
	}

    // 移除事件處理
	removeEvt(type, handler, capture = false) {
		this.elems.forEach(elem => removeEvtOn(elem, type, handler, capture));
		return this;
	}
	
    // 如果 value 為 undefined，取得元素 style 特性上對應的樣式
    // 否則在元素的 style 上設定特性			
	style(name, value) { 
		let elems = this.elems;
		let propName = PROPS.has(name) ? PROPS.get(name) : name;
		
		if(value === undefined) {
			return elems[0] ? elems[0].style[propName] : null;
		} else {
			elems.filter(elem => !isTextNode(elems[0]) && !isCommentNode(elems[0]))
	             .forEach(elem => elem.style[propName] = value);
	        return this;
		}
	}
	
    // 取得計算樣式，不寫在 style() 方法中的理由在於
    // 從計算樣式與 style() 方法傳回值是否為 undefined
    // 可以知道樣式是來自樣式表或者是 style 設定
    // 明確化來源是其目的
	computedStyle(name, pseudoClz = null) {
		let elems = this.elems;
		let propName = PROPS.has(name) ? PROPS.get(name) : name;
		return elems[0] && !isTextNode(elems[0]) && !isCommentNode(elems[0]) ?
                    window.getComputedStyle(elems[0], pseudoClz)[propName] : null;
	}
	
    // 可透過物件以 key : value（CSS）形式來設定樣式
	css(props) {
		let standardized =
			  Object.keys(props)
		            .reduce((acc, name) => {
		    	         acc[PROPS.has(name) ? PROPS.get(name) : name] = props[name];
		    	         return acc;
		            }, {});
		
		this.elems.forEach(elem => css(elem, standardized));
		return this;
	}

    // 取得元素確實位置	
	offset() {
		let elems = this.elems;
		return elems[0] ? offset(elems[0]) : null;
	}
	
    // 隱藏元素
	none(pesudoClz = null) {
		this.elems.forEach(elem => none(elem, pesudoClz));
        return this;
	}
	
    // 顯示元素
	display(pesudoClz = null) {
		this.elems.forEach(elem => display(elem, pesudoClz));
        return this;
	}
	
    // 淡出
	fadeOut(speed = 5000, steps = 10, pseudoClz = null) {
		this.elems.forEach(elem => fadeOut(elem, speed, steps, pseudoClz));
        return this;
	}

    // 淡入
	fadeIn(speed = 5000, steps = 10, pseudoClz = null) {
		this.elems.forEach(elem => fadeIn(elem, speed, steps, pseudoClz));
        return this;
	}
	
    // 第一個元素是否有指定類別
	hasClass(clz) {
		let elems = this.elems;
		return elems[0] ? hasClass(elems[0], clz) : null;
	}
	
    // 加入類別
	addClass(clz) {
		this.elems.forEach(elem => addClass(elem, clz)); 
        return this;
	}
    
    // 移除類別
	removeClass() {
		this.elems.forEach(elem => removeClass(elem, clz)); 
        return this;
	}
	
    // 切換類別
	switchClass(clz1, clz2) {
		this.elems.forEach(elem => switchClass(elem, clz1, clz2));
        return this;        
	}
}

function elemsById(...ids) {
	let container = this || document; 
	let elems = ids.map(id => container.getElementById(id));
	return new ElemCollection(elems);
}

function elemsByTag(...tags) {
	let container = this || document; 
	let elems = tags.map(tag => Array.from(container.getElementsByTagName(tag)))
	                .reduce((acc, arr) => acc.concat(arr), []);
	
	return new ElemCollection(elems);
}

function elemsByName(...names) {
	let container = this || document; 
	let elems = names.map(name => Array.from(container.getElementsByName(name)))
                     .reduce((acc, arr) => acc.concat(arr), []);
	
	return new ElemCollection(elems);
}

function elemsBySelector(...selectors) {
	let container = this || document; 
	let elems = selectors.map(selector => Array.from(container.querySelectorAll(selector)))
                         .reduce((acc, arr) => acc.concat(arr), []);
	
	return new ElemCollection(elems);	
}

//指定一或多個標籤名稱，建立 DOM 元素
function create(...tags) {
	return new ElemCollection(tags.map(tag => document.createElement(tag)));
}

// 包裹單一 DOM 元素
class XD {
	constructor(elem) {
		this.elem = elem;
	}
	
	elemsById(...ids) {
		return elemsById.apply(this.elem, ids);
	}
	
	elemsByTag(...tags) {
		return elemsByTag.apply(this.elem, tags);
	}
	
	elemsByName(...names) {
		return elemsByName.apply(this.elem, names);
	}
	
	elemsBySelector(...selectors) {
		return elemsBySelector.apply(this.elem, selectors);
	}
	
	toElemCollection() {
		return new ElemCollection([this.elem]);
	}
}

export {elemsById, elemsByTag, elemsByName, elemsBySelector, create};
export {Dimension, Coordinate} from './Style.js';

//預設匯出的工廠函式，用來建立  X 實例
export default function(elem) {
	if(typeof elem === 'string') {
		return new XD(document.createElement(elem));
	}
	return new XD(elem);
}