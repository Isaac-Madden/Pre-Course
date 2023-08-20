
//My Object - The Cat
const cat = {
    Height: "Small",          // string property
    Age: "5",                 // number property
    Angry: true,              // boolean property
    Food: "Dreamies",
    Skills: "None",
    Attack: "Cuddles",

    //String Update Method - a function for updating the Attack of the cat
    UpdateAttack: function (AttackStatus) {
        this.Attack = AttackStatus;
    },

    //Number Update Method - a function for updating the Age of the cat
    UpdateAge: function (AgeStatus) {
        this.Age = AgeStatus;
    },

    //Boolean Update Method - a function for updating the Anger of the cat
    UpdateAngry: function (AngryStatus) {
        this.Angry = AngryStatus;
    }

};

console.log("Initial attack method is", cat.Attack);                //Console Log to first check value of Attack (should be "Cuddles")
console.log("Attack method updated", cat.UpdateAttack("Kill"));     //Console Log to update the Attack value from "Cuddles" it to "Kill"
console.log("Updated attack method is",cat.Attack);                 //Console Log to check the value of Attack has updated as expected

console.log("Initial age of Cat is", cat.Age);                      //Console Log to first check the age of the cat (should be 5)
console.log("Age of cat updated", cat.UpdateAge("8"));              //Console Log to update the age of the cat to 8
console.log("Updated age of Cat is",cat.Age);                       //Console Log to check the age of the cat has updated as expected

console.log("Is the cat angry?", cat.Angry);                        //Console Log to check if the cat is angry (should be TRUE)
console.log("Calming cat down", cat.UpdateAngry(false));            //Console Log to update the anger of the cat to FALSE
console.log("Is the cat still angry?",cat.Angry);                   //Console Log to check if the cat is still angry
