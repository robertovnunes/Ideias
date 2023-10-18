const app = require("../conf/server");

const userRouter = require("./routes/user");

app.use('/user',userRouter);
