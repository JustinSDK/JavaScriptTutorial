function params(paraObj) {
    return Object.keys(paraObj)
                 .map(name => {
                     let paraName = encodeURIComponent(name);
                     let paraValue = encodeURIComponent(paraObj[name]);                         
                     return `${paraName}=${paraValue}`.replace(/%20/g, '+');
                 })
                 .join('&');
}

class XHREventTarget {
    constructor(xhr) {
        let evtTypes = ['loadstart', 'progress', 'abort', 'error', 'load', 'time', 'loadend'];

        let handlers = evtTypes.reduce((handlers, evtType) => {
            handlers[evtType] = new Set();
            return handlers;
        }, {});

        evtTypes.forEach(evtType => {
            xhr[`on${evtType}`] = function(evt) {
                handlers[evtType].forEach(handler => handler.call(xhr, evt));
            };
        });

        this.xhr = xhr;
        this.handlers = handlers;
    }

    addEvt(evtType, handler) {
        this.handlers[evtType].add(handler);
        return this;
    }

    removeEvt(evtType, handler) {
        this.handlers[evtType].delete(handler);
        return this;
    }       
}

class XHRUpload extends XHREventTarget {
    constructor(xhr) {
        super(xhr);
    }
}

class XHR extends XHREventTarget {
    constructor() {
        super(new XMLHttpRequest());

        let xhr = this.xhr;
        let handlers = this.handlers;
        handlers['readystatechange'] = new Set();

        xhr.onreadystatechange = function(evt) {
            handlers['readystatechange']
                .forEach(handler => handler.call(xhr, evt));
        };
    }

    open(method, url, query, async = true, username = null, password = null) {
        let openUrl = query ? `${url}?${params(query)}` : url; 
        this.xhr.open(method, openUrl, async, username, password);
        return this;
    }

    addHeaders(headers) {
        Object.keys(headers)
              .forEach(name => this.xhr.setRequestHeader(name, headers[name]));
        return this;
    }

    send(body = null) {
        this.xhr.send(body);
        return this;
    }

    uploadXHR() {
        if(this.upload === undefined) {
            this.upload = new XHRUpload(this.xhr.upload);
        }
        return this.upload;
    }

    responseType(type) {
        if(type === undefined) {
            return this.xhr.responseType;   
        }
        this.xhr.responseType = type;
        return this;
    }

    response() {
        return this.xhr.response;
    }
}

// 對 Ajax 請求相關設定的封裝
function ajax({method, url, headers = {}, query = {}, body = null, responseType = '', handlers = {}}) {
    let xhr = new XHR();
    xhr.responseType(responseType);

    Object.keys(handlers).forEach(handler => {
        xhr.addEvt(handler.slice(2), handlers[handler]);
    }); 

    let promise = new Promise((resolve, reject) => {
        xhr.addEvt('load', resolve);
        xhr.addEvt('error', reject);
    });

    xhr.open(method, url, query)
       .addHeaders(headers)
       .send(body);
    
    return promise;
}

// 方便的 get 函式，用於 GET 請求
function get(url, {headers = {}, query = {}, responseType = '', handlers = {}}) {
    return ajax({
        method : 'GET',
        url,
        headers,
        query,
        responseType,
        handlers
    });
}

// 方便的 post 函式，用於 POST 請求
function post(url, {headers = {}, body = null, responseType = '', handlers = {}}) {
    let bodyContent = body;
    if(headers['Content-Type'] === 'application/x-www-form-urlencoded' && typeof body !== 'string') {
        bodyContent = params(body);
    }

    return ajax({
        method : 'POST',
        url,
        headers,
        body : bodyContent,
        responseType,
        handlers
    });
}

export{params, XHR, XHRUpload, ajax, get, post};

export default function(method, url, options) {
    if(method === undefined) {
        return new XHR();
    }

    return ajax({
        method,
        url,
        ...options
    });
};