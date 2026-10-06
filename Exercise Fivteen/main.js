let peoples = [
    {
        name: "Hodan",
        age: 25,
        city: "Green Land"
    },
    {
        name: "Deeqo",
        age: 65,
        city: "Manchester"
    },
    {
        name: "Kaltumo",
        age: 35,
        city: "Hobyo"
    }
]
console.log("--Properties Of Value--")
for (const index in peoples) {
    const person = peoples[index];
    console.log(`name: ${person.name}\nage: ${person.age}\ncity: ${person.city}\n` ,'-------');
}

for (const person of peoples) {
    console.log(`name: ${person.name}\nage: ${person.age}\ncity: ${person.city}\n`, '--------');
}
