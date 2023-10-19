const app = require("../conf/server");
const cors = require("cors");


const userRouter = require("./routes/user");

app.use(cors());
app.use('/user',userRouter);
