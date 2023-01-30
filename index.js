const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./Routes/users");
const authRoute = require("./Routes/auth");

dotenv.config();


// connection into mongodb
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParse: true, useUnifiedTopology: true}, 
    () => {
    console.log("Connected to mongobd");
});


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))



app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);



app.get('/', (req, res) => {
    res.send("welcome to homepage");
})

app.listen(port, () => {
    console.log(`Backend Server is russssssssssssssssnning on ${port}`);

})