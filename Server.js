// Importing required modules
import express from 'express';
import { connectDB } from './SRC/Db/database.js';

// Creating an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const startServer = async () => {
    const PORT = process.env.PORT || 2002;
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