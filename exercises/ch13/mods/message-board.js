function setItem(storage, key, value) {
    storage.setItem(key, value);
}

function getItem(storage, key) {
    return storage.getItem(key);
}

function keys(storage) {
    let keys = [];
    for(let i = 0; i < storage.length; i++) {
        keys.push(storage.key(i));
    }
    return keys;
}

function removeItem(storage, id) {
    storage.removeItem(id);
}

class MessageBoard {
    constructor(keyPrefix) {
        this.keyPrefix = keyPrefix;
        let lastId = getItem(localStorage, `${keyPrefix}-lastId`);
        if(lastId) {
            this.lastId = lastId;
        }
        else {
            this.lastId = 0;
            setItem(localStorage, `${keyPrefix}-lastId`, 0);
        }
    }

    add(message) {
        let id = ++this.lastId;
        setItem(localStorage, `${this.keyPrefix}-${id}`, JSON.stringify({
            id: id,
            time: Date.now(),
            blabla: message
        }));
        setItem(localStorage, `${this.keyPrefix}-lastId`, id);
    }

    allMessages() {
        return keys(localStorage)
                .filter(key => key.startsWith(`${this.keyPrefix}`) && !key.endsWith('lastId'))
                .map(key => getItem(localStorage, key))
                .map(value => JSON.parse(value))
                .sort((e1, e2) => e1.id - e2.id);
    }

    update(id, message) {
        setItem(localStorage, `${this.keyPrefix}-${id}`, JSON.stringify({
            id,
            time: Date.now(),
            blabla: message
        }));
    }

    delete(id) {
        removeItem(localStorage, `${this.keyPrefix}-${id}`);
    }
}

export default function(dbName) {
    return new MessageBoard(`${dbName}-messages`);
};