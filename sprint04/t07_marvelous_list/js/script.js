const films = [
    {
        title: "The Godfather",
        poster_src: "assets/images/godfather.jpg",
        prod_date: "March 24, 1972",
        info: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
        actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    },

    {
        title: "12 Angry Men",
        poster_src: "assets/images/angry.jpg",
        prod_date: "April 10, 1957",
        info: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        actors: ["Henry Fonda", "Lee J.Cobb", "Martin Balsam"],
    },
    
    {
        title: "Fight Club",
        poster_src: "assets/images/fight.jpg",
        prod_date: "September 10, 1999",
        info: "An insurance agent for a large car company named Jack, a quiet, uninteresting young man, suffers from chronic insomnia. He is so exhausted that he feels better only in the company of people who suffer even more than he does. One day, Jack meets an unusual young man, soap dealer Tyler Durden. ",
        actors: ["Brad Pitt", "Edward Norton", "Meat Loaf"],
    },
]


function changeInfo(id) {
    for (let i = 0; i < films.length; i++) document.getElementById(i).style.borderLeft = "none";
    console.log(id);
    actors.innerHTML = "";

    title.innerHTML = films[id].title;
    date.innerHTML = films[id].prod_date;
    info.innerHTML = films[id].info;
    poster.src = films[id].poster_src;
    for (let i = 0; i < films[id].actors.length; i++) {
        let actor = document.createElement('div');
        actor.innerHTML = films[id].actors[i];
        actor.classList.add('actor-name');
        actors.appendChild(actor);
    }
    document.getElementById(id).style.borderLeft = "4px solid blue";
}

document.addEventListener('DOMContentLoaded', () => {
    changeInfo('0');
});


