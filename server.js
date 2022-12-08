


const dotenv = require('dotenv');

dotenv.config({ path: 'config.env' })

const app = require('./Backend/app');

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
