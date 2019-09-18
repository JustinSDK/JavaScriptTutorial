class MultiMap extends Map {
    constructor(iterable) {
        super();
        for(let [k, v] of iterable) {
            this.set(k, v);
        }
    }

    set(key, value) {
        let valueSet = this.get(key) || new Set();
        valueSet.add(value);
        super.set(key, valueSet);
        return this;
    }
}

let multiMap = new MultiMap([
    ['A', 'Justin'], 
    ['B', 'Monica'], 
    ['B', 'Irene']
]);
multiMap.set('C', 'Irene');

console.log(multiMap);
console.log(multiMap.get('B')) 