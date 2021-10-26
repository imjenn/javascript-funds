class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack( target ) {
        target.res -= this.power;
        return target.res;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            return target[`${this.stat}`] += this.magnitude;
        } else {
            throw new Error( "Target must be a unit" )
        }
    }
}

// Red Belt Ninja instance
const red = new Unit("Red Belt Ninja", 3, 3, 4);
console.log(red);

// Black Belt Ninja instance
const black = new Unit("Black Belt Ninja", 4, 5, 4);
console.log(black);

// Hard Algo instance
const hardAlgo = new Effect("Hard Algorithm", 2, "increase target's res by 3", "res", 3);

// Unhandled Promise Reject instance
const promise = new Effect("Unhandled Promise Rejection", 1, "reduce target's res by 2", "res", -2);

// Pair Programming instance
const pair = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Play promise on red belt
console.log(`Red Belt Ninja stats: ${JSON.stringify(red)}`)
promise.play(red);
console.log(`Red Belt Ninja's updated res:  ${red.res}`)

// Play pair on red belt
pair.play(red);
console.log(`Red Belt Ninja's updated power:  ${red.power}`)

// red attack black
console.log(black)
red.attack(black);
console.log(black);
