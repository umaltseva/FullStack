class Human {
    constructor(firstName, lastName, gender, age, calories) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
        this.sleepTime = false;
        this.feedTime = false;
        setInterval(() => this.hungry(), 60000);

        this.updateInfo();
    }
  
    updateInfo() {
        document.getElementById("firstName").textContent = this.firstName;
        document.getElementById("lastName").textContent = this.lastName;
        document.getElementById("gender").textContent = this.gender;
        document.getElementById("age").textContent = this.age;
        document.getElementById("calories").textContent = this.calories;
    }

    setInfoText(text) {
        document.querySelector(".container .text").textContent = text;
    }
  
    setCalories(calories) {
        document.getElementById("calories").textContent = calories;
    }
  
    sleepFor(sleepSeconds) {
        if (!this.feedTime && !this.sleepTime) {
            this.sleepTime = true;
            this.setInfoText("I'm sleeping");
  
            setTimeout(() => {
                this.setInfoText("I'm awake now");
                this.sleepTime = false;
  
                setTimeout(() => {
                    this.setInfoText("");
                }, 2000);
            }, sleepSeconds * 1000);
        }
    }
  
    feed() {
        if (this.calories > 500) {
            this.setInfoText("I'm not hungry");
            setTimeout(() => {
                this.setInfoText("");
            }, 2000);
        } else {
            if (!this.sleepTime && !this.feedTime) {
                this.feedTime = true;
                this.calories += 200;
                this.setInfoText("Nom nom nom");
      
                setTimeout(() => {
                    this.setInfoText("");
      
                    if (this.calories > 0 && this.calories < 500) {
                        this.setInfoText("I'm still hungry");
                        this.feedTime = false;
                    } else {
                        this.setInfoText("I'm not hungry");
                        setTimeout(() => {
                            this.setInfoText("");
                            this.feedTime = false;
                        }, 2000);
                    }
                    
                    this.setCalories(this.calories);
                }, 10000);
            }
        }
    }
  
    hungry() {
        if (this.calories >= 200) {
            this.calories -= 200;
            this.setCalories(this.calories);
        }
    }
}

class Superhero extends Human {
    constructor(firstName, lastName, gender, age, calories) {
        super(firstName, lastName, gender, age, calories);
        this.flyTime = false;
        this.fightTime = false;
        this.updateInfo();
    
        document.querySelector(".container .superhero").classList.replace("superhero", "human");
        document.querySelector(".container .human").classList.replace("human", "superhero");
        document.querySelector(".container .buttons .hiden_btn").classList.replace("hiden_btn", "new_btn");
        document.querySelector(".container .buttons .hiden_btn").classList.replace("hiden_btn", "new_btn");

        document.getElementById("calories").style.display = "none";
        document.getElementById("calories-li").style.display = "none";
        document.querySelector(".container .buttons .turn").style.display = "none";
        document.querySelector(".container .buttons .feed").style.display = "none";
        document.querySelector(".container .buttons .sleep").style.display = "none";
    }
  
    fly() {
        
        if (!this.flyTime && !this.fightTime) {
            this.flyTime = true;
            this.setInfoText("I'm flying!");
           
            setTimeout(() => {
                this.setInfoText("");
                this.flyTime = false;
            }, 10000);
        }
        
    }

    fightWithEvil() {
        if (!this.flyTime && !this.fightTime) {
            this.fightTime = true;
            this.setInfoText("Khhhh-chh... Bang-g-g-g... Evil is defeated!");
  
            setTimeout(() => {
                this.setInfoText("");
                this.fightTime = false;
            }, 3000);
        }
    }
}
  
document.querySelector(".container .buttons .sleep").addEventListener("click", () => {
    const sleepSeconds = parseInt(prompt("Enter number of seconds to sleep"), 10);
    if (!isNaN(sleepSeconds)) {
        human.sleepFor(sleepSeconds);
    } else {
        alert("Invalid input. Please enter a valid number of seconds.");
    }
});
  
document.querySelector(".container .buttons .feed").addEventListener("click", () => {
    human.feed();
});
  
document.querySelector(".container .turn").addEventListener("click", () => {
    if (human.calories >= 500) {
        const superhero = new Superhero("Catwoman", "Bestie", "female", 20, human.calories);
        document.querySelector(".container .buttons .fly").addEventListener("click", () => {
            superhero.fly();
        });
          
        document.querySelector(".container .buttons .fight").addEventListener("click", () => {
            superhero.fightWithEvil();
        });
    } else {
        human.setInfoText("Not enough calories!");
    }
});
  
const human = new Human("Selina", "Kyle", "female", 18, 0);
let superhero;
