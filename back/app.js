const app = require("./conf/server");
const cors = require("cors");
const userRoutes = require("./app/routes/user");
const pacienteRoutes = require("./app/routes/paciente");

app.use(cors());

app.use(userRoutes);
app.use(pacienteRoutes);

app.get("/", (req, res) => {
    res.send("It's working!");
});