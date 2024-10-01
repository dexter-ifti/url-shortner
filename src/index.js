const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config({
    path : './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });

})
.catch((err) => console.error(err));
