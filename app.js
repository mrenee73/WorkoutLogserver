const Express = require('express');
const app = Express();
const dbConnection = require("./db");

app.use(Express.json());

const controllers= require("./controllers");

app.use("/log", controllers.workoutController);
app.use("/user", controllers.userController);

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3005, () => {
            console.log(`[Server]: App is listening on 3005.`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });


// app.use('/test', (req, res) => {
//     res.send('This is message from the test endpoint on the server!')
// });



