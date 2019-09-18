define('openhome', function() {
    function validate() {
        console.log('validate');
    }

    function format() {
        console.log('format');
    }

    return {
        validate: validate,
        format: format
    };
});