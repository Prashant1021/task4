import express, { json } from 'express';
import connectDb from './src/connectDB/connectMongooDb.js';

import userRouter from './src/routes/userRoute.js';

let app = express();
app.use (json())
connectDb()
app.use("/user",userRouter)
connectDb()
app.listen(3000,()=>{
    console.log("app listening on 3000")
})