const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")

const userRoutes = require("./routes/user")

app.use(userRoutes)

app.listen(port, () => console.log(`Server listening on port: ${port}`))