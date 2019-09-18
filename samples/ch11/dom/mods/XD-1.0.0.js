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

// 預設匯出的工廠函式，用來建立  X 實例
// 如果傳入字串，會建立新元素
// 否則直接包裹 DOM 元素
export default function(elem) {
	if(typeof elem === 'string') {
		return new XD(document.createElement(elem));
	}
	return new XD(elem);
}