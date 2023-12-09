const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongins: ['small hat', 'sunglasses']
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
    };
    
//create a loop that logs each item in Robin’s inventory.
    for (const item of adventurer.inventory) {
        console.log(item);
    };
//Test this method by calling adventurer.roll() a few times.
adventurer.roll();
adventurer.roll();
adventurer.roll(3);

//Part2:Class Fantasy
//Properties:name,type/ Nested objects:companion & companion
class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.invemtory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }  
};
//we can re-create Robin using the Character class!
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
//Let's give it a try
console.log(robin); 
//Part 3: Class Features
//Expand with our own properties
class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      this.experience = experience
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    // Method to gain experience points
  gainExperience(points) {
    this.experience += points;
    console.log(`${this.name} gained ${points} experience points.`);
  }
  // Method to learn a new ability
  learnAbility(ability) {
    this.specialAbilities.push(ability);
    console.log(`${this.name} learned a new ability: ${ability}.`);
  }
  }
 //Create a companion
 class Companion {
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.belongings = [];
    }
    giveBelongings(items) {
        this.belongings.push(...items);
        console.log(`${this.name} received new belongings: ${items.join(', ')}.`);
      }
}
// Creating instances of Adventurer and Companion
//const robin = new Adventurer("Robin", "Warrior");
const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");
// Giving belongings to companions
leo.giveBelongings(["small hat", "sunglasses"]);
frank.giveBelongings(["tiny backpack", "map"]);

// Assigning companions to Robin
robin.companion = leo;
leo.companion = frank;

console.log(robin);
console.log(leo);
console.log(frank);

//Part 4: Class Uniforms



