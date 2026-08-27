require('dotenv').config()
const app = require('./src/app.js')
const connectDB = require('./src/db/db.js')
const PORT = process.env.PORT || 3000;

connectDB()

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});