const express = require("express")
const app = express()
const PORT = 3000

app.get(`/`, (req, res) => {
res.send("may the force be with you!")
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})