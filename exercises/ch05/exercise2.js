function freeze(obj) {
    Object.getOwnPropertyNames(obj)
          .forEach(function(prop) {
               let desc = Object.getOwnPropertyDescriptor(obj, prop);
               if('value' in desc) {  // 排除設定了 get 與 set 的情況
                   desc.writable = false;
               }
               desc.configurable = false;
               Object.defineProperty(obj, prop, desc);
           });

    return Object.preventExtensions(obj);
}