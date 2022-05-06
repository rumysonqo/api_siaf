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

rutas.get('/api/genericas',(req,res)=>{
    con.query('select distinct(cod_generica) as codigo, generica from rep_siaf',(err,rows,fields)=>{
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

//totales por generica
rutas.get('/api/totales_gen/:gen',(req,res)=>{
    const { gen } = req.params;
    con.query('select sum(pia) as pia,sum(pim) as pim,sum(certificado) as certificado,sum(devengado) as devengado, sum(pim)-sum(devengado) as saldo, (sum(devengado)/sum(pim))*100 as avance from rep_siaf where cod_generica = ?',[gen],(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

rutas.get('/api/ejec_ro',(req,res)=>{
    con.query('select sum(pia) as pia,sum(pim) as pim,sum(certificado) as certificado,sum(devengado) as devengado, sum(pim)-sum(devengado) as saldo, (sum(devengado)/sum(pim))*100 as avance from rep_siaf where cod_fuente= 1',(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

rutas.get('/api/ejec_dt',(req,res)=>{
    con.query('select sum(pia) as pia,sum(pim) as pim,sum(certificado) as certificado,sum(devengado) as devengado, sum(pim)-sum(devengado) as saldo, (sum(devengado)/sum(pim))*100 as avance from rep_siaf where cod_fuente= 4',(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

rutas.get('/api/ejec_rdr',(req,res)=>{
    con.query('select sum(pia) as pia,sum(pim) as pim,sum(certificado) as certificado,sum(devengado) as devengado, sum(pim)-sum(devengado) as saldo, (sum(devengado)/sum(pim))*100 as avance from rep_siaf where cod_fuente= 2',(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

rutas.get('/api/ejec_det',(req,res)=>{
    con.query('select sum(pia) as pia,sum(pim) as pim,sum(certificado) as certificado,sum(devengado) as devengado, sum(pim)-sum(devengado) as saldo, (sum(devengado)/sum(pim))*100 as avance from rep_siaf where cod_fuente= 5',(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

rutas.get('/api/ejec_crd',(req,res)=>{
    con.query('select sum(pia) as pia,sum(pim) as pim,sum(certificado) as certificado,sum(devengado) as devengado, sum(pim)-sum(devengado) as saldo, (sum(devengado)/sum(pim))*100 as avance from rep_siaf where cod_fuente= 3',(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

rutas.get('/api/ejec_fte_gen/:fte/:gen',(req,res)=>{
    const { fte, gen } = req.params;
    con.query('select sum(pia) as pia,sum(pim) as pim,sum(certificado) as certificado,sum(devengado) as devengado, sum(pim)-sum(devengado) as saldo, (sum(devengado)/sum(pim))*100 as avance from rep_siaf where cod_fuente= ? and cod_generica = ?',[fte,gen],(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});




module.exports=rutas;