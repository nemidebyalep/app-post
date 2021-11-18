const app = require('./middleware/app');
app.listen(app.get("port"), () => {
    console.log(`puerto ` + app.get("port"))
});