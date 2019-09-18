var define, require;

(function() {
    var modules = {};

    define = function(name, callback) {
        modules[name] = callback();
    };

    require = function(name, callback) {
        callback(modules[name]);
    };
})();