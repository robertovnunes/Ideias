const app = require("../conf/server");
const cors = require("cors");
const userRoutes = require("./routes/user");
const prontuarioRoutes = require("./routes/prontuario");


app.use(cors());

app.use(userRoutes);
app.use(prontuarioRoutes);

app.get("/", (req, res) => {
    res.send("It's working!");
});






