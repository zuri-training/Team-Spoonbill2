const mongoose = require('mongoose');
const dotenv = require('dotenv');




dotenv.config({ path: '.env' });
const app = require('./Backend/app');

mongoose.set('strictQuery', true);
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser:true,
}).then(() => {
    console.log("Database conection successfull");
})



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
