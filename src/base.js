const mysql=require('mysql2');
const conex=mysql.createConnection({
    host:'localhost',
    user:'abel',
    password:'Indira2475',
    database:'siaf'
});

conex.connect((err)=>{
        if(err){
            console.log(err);
            return;
        }else{
            console.log('bd conectada');
        }
});

module.exports=conex;

