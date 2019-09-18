var define, require;

(function() {
    var modules = {};

    define = function(name, callback) {
        modules[name] = callback();
    };

    require = function(names, callback) {
        var dependencies = names.map(function(name) {
            return modules[name];
        });

        callback.apply(undefined, dependencies);
    };
})();