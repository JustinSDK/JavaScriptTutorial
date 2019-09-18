// 主要在允許事件處理器以傳回 false 的方式停止預設行為
function addEvtOn(elem, evtType, handler, capture = false) {
    elem.addEventListener(evtType, evt => {
        let result = handler.call(evt.currentTarget, evt);
        if(result === false) {
            evt.preventDefault();
        }
        return result;
    }, capture);
}

function removeEvtOn(elem, evtType, handler, capture = false) {
    elem.removeEventListener(evtType, handler, capture);
}

export {addEvtOn, removeEvtOn};