require(['openhome'], function(openhome) {
    function find() {
        console.log('find');
    }

    function map() {
        console.log('map');
    }

    openhome.find = find;
    openhome.map = map;
});