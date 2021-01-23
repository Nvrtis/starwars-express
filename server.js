const express = require("express")
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const characters = [
    {
        name: "Yoda",
        role: "Jedi Master",
        forcePoints: 100000,
        age: 900,
        avatar: "https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png",
        routeName:"yoda"
    },{
        name: "Princess Leia",
        role: "General Princess",
        forcePoints: 100,
        age: 40,
        avatar: "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
        routeName:"princessleia"
    },{
        name: "Luke Skywalker",
        role: "Jedi Master",
        forcePoints: 10000,
        age: 40,
        avatar: "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png",
        routeName:"lukeskywalker"
    },

]
// HTML Routes

app.get(`/`, (req, res) => {
res.send("may the force be with you!")
})
// /api/characters = listen and show all of the characters
app.get(`/api/characters`, (req, res) => {
    res.json(characters)
})
// /api/characters/:routeName = shows one character
app.get(`/api/characters/:routeName`, (req, res) => {
   const targetCharacter = req.params.routeName
    const character = characters.find(character => {
        return character.routeName===targetCharacter        
    })
    // console.log(character);
    res.json(character)

})
// add new char
app.post('/api/characters/add', (req, res) => {
    // console.log(req.body);
    const newCharacter = req.body
    newCharacter.routeName = newCharacter.name.replace(/ /g, "").toLowerCase()
    characters.push(newCharacter)
    // console.log(characters);
    res.status(200).send()
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})