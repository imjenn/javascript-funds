// Create a Ninja class
// Add an attribute: name
// Add an attribute: health
// Add an attribute: speed - default value of 3
// Add an attribute: strength - default value of 3
// Add a method: sayName() - This should log that Ninja's name to the console
// Add a method: showStats() - This should log that Ninja's name, strength, speed, and health
// Add a method: drinkSake() - This should add +10 health to the Ninja

class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
        return this;
    }
    showStats() {
        console.log(`Ninja's stats: \nName: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}`);
        return this;
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();


// Extend Ninja class and create the Sensei class
// A Sensei should have 200 health, 10 speed, and 10 strength by default
// A Sensei should have a new attribute called wisdom with default of 10
// Add speakWisdom() that calls the drinkSake() method from the Ninja class.
// example output
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

class Sensei extends Ninja {
    constructor(wisdom) {
        super(wisdom);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("Do or do not, there is no try.")
        this.showStats();
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
