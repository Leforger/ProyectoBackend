const express = require('express');
const router = express.Router();

const conn = require('./database/db');

router.get('/', (req, res) => {
    conn.query('SELECT * from libros2', (error, results) => {
        if(error){throw error};
        console.log(results);
        res.render('index', {results:results});
    })
});

router.get('/create', (req,res) => {
    res.render('create');
});

router.get('/edit/:id', (req,res) => {
    const id = req.params.id;
    conn.query('SELECT * from libros2 WHERE id = ?', [id], (error, results) => {
        if(error){throw error};
        console.log(results);
        res.render('edit', {libro:results[0]});
    })
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

router.get('/delete/:id', (req,res) => {
    const id = req.params.id;
    conn.query('DELETE FROM libros2 WHERE id = ?', [id], (error, results) => {
        if(error){
            throw (error);
        }
        res.redirect('/');
    });
});

module.exports = router;