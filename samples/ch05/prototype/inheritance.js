function Role(name, level, blood) {
    this.name = name;   // 角色名稱
    this.level = level; // 角色等級
    this.blood = blood; // 角色血量
}

Object.defineProperties(Role.prototype, {
    toString: {
        value: function() {
            return `(${this.name}, ${this.level}, ${this.blood})`;
        },
        writable: true,
        configurable: true
    }
});

function SwordsMan(name, level, blood) {
    Role.call(this, name, level, blood);
}

SwordsMan.prototype = Object.create(Role.prototype, {
    constructor: {
        value: SwordsMan,
        writable: true,
        configurable: true    
    }
});

Object.defineProperties(SwordsMan.prototype, {
    fight: {
        value: () => console.log('揮劍攻擊'),
        writable: true,
        configurable: true
    }
});

function Magician(name, level, blood) {
    Role.call(this, name, level, blood);
}

Magician.prototype = Object.create(Role.prototype, {
    constructor: {
        value: Magician,
        writable: true,
        configurable: true    
    }
});

Object.defineProperties(Magician.prototype, {
    fight: {
        value: () => console.log('魔法攻擊'),
        writable: true,
        configurable: true
    },
    cure: {
        value: () => console.log('魔法治療'),
        writable: true,
        configurable: true
    }
});

let swordsMan = new SwordsMan('Justin', 1, 200);
let magician = new Magician('Monica', 1, 100);

swordsMan.fight();
magician.fight();
console.log(swordsMan.toString());
console.log(magician.toString());