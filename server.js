const mongoose = require('mongoose');
const dotenv = require('dotenv');




dotenv.config({ path: 'config.env' });
const app = require('./Backend/app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser:true,
}).then(() => {
    console.log("Database conection successfull");
})



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
