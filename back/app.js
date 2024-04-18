const app = require("./conf/server");
const cors = require("cors");
const userRoutes = require("./app/routes/user");
const prontuarioRoutes = require("./app/routes/prontuario");


app.use(cors());

app.use(userRoutes);
app.use(prontuarioRoutes);

app.get("/", (req, res) => {
    res.send("It's working!");
});






