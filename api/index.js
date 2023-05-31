import express from "express"
import userRoutes from "./routes/users.js"
import treiRoutes from "./routes/trei.js"
import profRoutes from "./routes/prof.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())


app.use("/", userRoutes)
app.use("/treinos", treiRoutes)
app.use("/professor", profRoutes)

app.listen(8800)