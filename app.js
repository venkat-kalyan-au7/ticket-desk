import express from "express"
import morgan from "morgan"
import userRoutes from "./routes/userRoutes"
import ticketRoutes from "./routes/ticketRoutes"
import projectRoutes from "./routes/projectRoutes"

const app = express()

app.use(morgan('tiny'))


app.use('/users',userRoutes)
app.use('/tickets',ticketRoutes)
app.use('/projects,',projectRoutes)





module.exports = app