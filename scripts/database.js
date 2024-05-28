const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Stench Master Funk",
            power: "Blast debilitating odors"
        },
        {
            id: 2,
            name: "Smoke Choker",
            power: "Put out fires"
        },
        {
            id: 3,
            name: "Mellow Motioner",
            power: "Slow down opponent"
        },
        {
            id: 4,
            name: "Weeping Willow",
            power: "Water blasts"
        }
    ]
}

// export const getVillains = () => {
//     return database.villains.map(villain => ({...villain}))
// }
export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}

