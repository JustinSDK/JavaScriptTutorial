function ajax(url, option) {
    let realOption = {
        method : option.method || 'GET',
        contents : option.contents || '',
        dataType : option.dataType || 'text/plain',
        // 其他設定 ...
    };

    console.log('請求', url);
    console.log('設定', realOption);
}

ajax('http://openhome.cc', {
    method: 'POST',
    contents: 'book=python'
});