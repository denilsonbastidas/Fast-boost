const App = require('./app');
const Enviroment = require('./enviroment');

App.listen(Enviroment.PORT, () => {
    console.log("puerto corriendo en", Enviroment.PORT);
})