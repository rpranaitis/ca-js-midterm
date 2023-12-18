/* ------------------------------ TASK 4 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        return this.budget > 1e+8;
    }
}

const movie1 = new Movie('The Shawshank Redemption', 'Frank Darabont', 25e+6);
const movie2 = new Movie('Justice League', 'Zack Snyder', 3e+8);

console.log(movie1.wasExpensive())
console.log(movie2.wasExpensive())