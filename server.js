import express from "express";
import dotenv from 'dotenv';
import 'dotenv/config.js'
import './config/database.js'

// routers
import { router as userRouter } from './routes/userRoutes.js'

const app = express()

app.use('./api/user', userRouter)


dotenv.config();
const PORT = process.env.PORT || 5000
app.listen(process.env.PORT, () => {
    console.log(`server is runing on PORT ${PORT}`)
})