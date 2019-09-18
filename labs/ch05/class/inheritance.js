class Role {
    constructor(name, level, blood) {
        this.name = name;   // 角色名稱
        this.level = level; // 角色等級
        this.blood = blood; // 角色血量
    }
    
    toString() {
        return `(${this.name}, ${this.level}, ${this.blood})`;
    }
}

// 實作 SwordsMan 繼承 Role

class Magician extends Role {
    constructor(name, level, blood) {
        super(name, level, blood); // 呼叫父建構式
    }

    fight() {
        console.log('魔法攻擊');
    }

    cure() {
        console.log('魔法治療');
    }

    toString() {
        return `Magician${super.toString()}`;
    }
}

let swordsMan = new SwordsMan('Justin', 1, 200);
let magician = new Magician('Monica', 1, 100);

swordsMan.fight();
magician.fight();
console.log(swordsMan.toString());
console.log(magician.toString());