function seal(obj) {
    Object.getOwnPropertyNames(obj)
          .forEach(function(prop) {
               let desc = Object.getOwnPropertyDescriptor(obj, prop);
               desc.configurable = false;
               Object.defineProperty(obj, prop, desc);
           });

    return Object.preventExtensions(obj);
};