// Importing required modules
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import { connectDB } from './SRC/Db/database.js';
import router from './src/routes/index.js';

dotenv.config()

// Creating an Express application
const app = express();

app.use(cors({origin:"*"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)


const startServer = async () => {
    const PORT = process.env.PORT || 9090;
    try {
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
connectDB()
} catch (error) {
    console.log(error);
}
}

startServer()
    // Define a route
    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });