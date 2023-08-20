//My Class - The Cat

class Cat {
    constructor(   
        //Defines parameters:
            Height,         
            Age,             
            Angry,   
            Colour,           
            Food,
            Skills,
            Attack
    )  
    {
        this.Height = Height;
        this.Age = Age;
        this.Angry = Angry;
        this.Colour = Colour;
        this.Food = Food;
        this.Skills = Skills;
        this.Attack = Attack;
    }
        //String Update Method - a function for updating the Attack of the cat
        UpdateAttack(AttackStatus) {
            this.Attack = AttackStatus;
        };

        //Number Update Method - a function for updating the Age of the cat
        UpdateAge(AgeStatus) {
            this.Age = AgeStatus;
        };

        //Boolean Update Method - a function for updating the Anger of the cat
        UpdateAngry(AngryStatus) {
            this.Angry = AngryStatus;
        }

        //String Update Method - a function for updating the colour of the cat
        UpdateColour(ColourStatus) {
        this.Colour = ColourStatus;
        };
}

export default Cat;
