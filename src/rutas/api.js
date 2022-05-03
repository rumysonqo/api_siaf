const express=require('express');
const rutas=express.Router();

const con=require('../base');

rutas.get('/api/',(req,res)=>{
    con.query('select * from rep_siaf',(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

rutas.get('/api/fuentes',(req,res)=>{
    con.query('select distinct(cod_fuente) as codigo, fuente from rep_siaf',(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

rutas.get('/api/rep_prog_fte/:fte',(req,res)=>{
    const { fte } = req.params;
    con.query('select programa,fuente,sum(pia) as pia,sum(pim) as pim,sum(certificado) as certificado,sum(devengado) as devengado, sum(pim)-sum(devengado) as saldo, (sum(devengado)/sum(pim))*100 as avance from rep_siaf where cod_fuente= ? group by programa,fuente order by programa,fuente',[fte],(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


rutas.get('/api/totales',(req,res)=>{
    con.query('select sum(pia) as pia,sum(pim) as pim,sum(certificado) as certificado,sum(devengado) as devengado, sum(pim)-sum(devengado) as saldo, (sum(devengado)/sum(pim))*100 as avance from rep_siaf ',(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});



module.exports=rutas;