function rwObjectStore(db, storeName) {
    return db.transaction([storeName], 'readwrite')
             .objectStore(storeName);
}

function rObjectStore(db, storeName) {
    return db.transaction([storeName], 'readonly')
             .objectStore(storeName);
}

function addMessage(db, message) {
    rwObjectStore(db, 'messages').add({
        time: Date.now(),
        blabla: message
    });
}

function messageById(db, id) {
    return new Promise(resolve => {
        rObjectStore(db, 'messages')
          .get(id)
          .onsuccess = function(evt) {
              resolve(evt.target.result);
          };
    });
}

function allMessages(db) {
    let messages = [];
    return new Promise(resolve => {
        rObjectStore(db, 'messages')
          .openCursor()
          .onsuccess = function(evt) {
              let cursor = evt.target.result;
              if(cursor) {
                  messages.push(cursor.value);
                  cursor.continue();
              } 
              else {
                  resolve(messages);
              }
          };
    });
}

function messageByIndex(db, index, query) {
    return new Promise(resolve => {
        rObjectStore(db, 'messages')
            .index(index)
            .get(query)
            .onsuccess = function(evt) {
                resolve(evt.target.result);
            };
    });
}

function allMessagesByIndex(db, index, query) {
    let messages = [];
    return new Promise(resolve => {
        rObjectStore(db, 'messages')
          .index(index)
          .openCursor(query)
          .onsuccess = function(evt) {
              let cursor = evt.target.result;
              if(cursor) {
                  messages.push(cursor.value);
                  cursor.continue();
              } 
              else {
                  resolve(messages);
              }
          };
    });
}

function updateMessage(db, id, message) {
    rwObjectStore(db, 'messages').put({
          id,
          time: Date.now(),
          blabla: message
      });
}

function deleteMessage(db, id) {
    rwObjectStore(db, 'messages').delete(id);
}

class MessageBoard {
    constructor(db) {
        this.db = db;
    }

    add(message) {
        addMessage(this.db, message);
    }

    messageById(id) {
        return messageById(this.db, id);
    }

    allMessages() {
        return allMessages(this.db);
    }

    messagesByTime(time) {
        return messagesByIndex(this.db, 'byTime', time);
    }
    
    messagesByBlaBla(blabla) {
        return messagesByIndex(this.db, 'byBlaBla', blabla);
    }
    
    update(id, message) {
        updateMessage(this.db, id, message);
    }

    delete(id) {
        deleteMessage(this.db, id);
    }
}

export default function(dbName) {
    let openRequest = indexedDB.open(dbName, 1);
    openRequest.onupgradeneeded = function(evt) {
        let db = evt.target.result;
        if(!db.objectStoreNames.contains('messages')) {
            let objectStore = db.createObjectStore(
                'messages', {
                    keyPath: 'id', 
                    autoIncrement: true
                }
            );
            objectStore.createIndex('byTime', 
                'time', {unique: false}
            );
            objectStore.createIndex('byBlabla', 
                'blabla', {unique: false}
            );         
        }
    };
    return new Promise(resolve => {
        openRequest.onsuccess = async function(evt) {
            resolve(new MessageBoard(evt.target.result));
        };    
    });
};