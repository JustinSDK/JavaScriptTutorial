// 設定Cookie，使用毫秒數設定expires
// 可設定path、domain、secure屬性
function set(key, value, attrs = {}) {
    let {expires, path, domain, secure} = attrs;
    let kv = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    let expi = typeof expires !== 'undefined' ? `; expires=${new Date(expires).toUTCString()}` : '';
    let dn = domain ? `; domain=${domain}` : '';
    let pth = path ? `; path=${path}` : '';
    let sec = secure ? '; secure' : '';
    document.cookie = kv + expi + dn + pth + sec;
}

function keyRE(key) {
    return encodeURIComponent(key).replace(/[-.+*]/g, "\\$&");
}

// 指定鍵取得Cookie對應的值
function get(key) {
    let value = document.cookie.replace(
        new RegExp(`(?:(?:^|.*;)\\s*${keyRE(key)}\\s*\\=\\s*([^;]*).*$)|^.*$`), 
        '$1'
    );
    return decodeURIComponent(value) || null;
}

// 是否有指定的Cookie
function has(key) {
    let re = new RegExp(`(?:^|;\\s*)${keyRE(key)}\\s*\\=`);
    return re.test(document.cookie);
}

// 移除指定的Cookie
function remove(key, path, domain) {
    set(key, '', {
        path,
        domain,
        expires: 0
    })
}

// 取得全部Cookie名稱清單
function keys() {
    return document.cookie
             .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
             .split(/\s*(?:\=[^;]*)?;\s*/)
             .map(decodeURIComponent);
}

 // 取得全部Cookie值清單
function values() {
    return keys().map(get);
}

 // 取得全部Cookie清單
function all() {
    return keys().map(key => {
        let value = get(key);
        return {key, value};
    });
}

export{set, get, has, remove, keys, values, all};