// import { database } from "./database.js"
import { getHeroes } from "./database.js"

const heroes = getHeroes()

export const HeroList = () => {
    let heroHTML = "<ul>"

    for (const hero of heroes) {
        heroHTML += `<li>${hero.name}</li>`
    }

    heroHTML += "</ul>"

    return heroHTML
}

// export const HeroList = () => {
//     let heroHTML = "<ul>"

//     for (const hero of database.heroes) {
//         heroHTML += `<li>${hero.name}</li>`
//     }

//     heroHTML += "</ul>"

//     return heroHTML
// }