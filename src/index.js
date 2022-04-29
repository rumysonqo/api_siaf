const express =require('express');
const cors = require('cors');
const app=express();

//configuracion
app.set('port',process.env.PORT || 3001);

//middleware
app.use(express.json());
app.use(cors());
//routes
app.use(require('./rutas/api'));

app.listen(app.get('port'), ()=>{
    console.log('servidor en puerto ',app.get('port'));
});
