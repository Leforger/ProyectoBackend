const conn = require('../database/db');

exports.save = (req,res) => {
    const titulo = req.body.titulo;
    const paginas = req.body.paginas;
    const año = req.body.fecha_publicacion;
    const editorial = req.body.editorial;
    conn.query('INSERT INTO libros2 SET ?', {titulo:titulo, paginas:paginas, fecha_publicacion:año, editorial:editorial}, (error, results) =>{
        if(error){
            throw (error);
        }
        res.redirect('/');
    })
};

exports.update = (req,res) => {
    const id = req.body.id;
    const titulo = req.body.titulo;
    const paginas = req.body.paginas;
    const año = req.body.fecha_publicacion;
    const editorial = req.body.editorial;
    conn.query('UPDATE libros2 SET ? WHERE id = ?', [{titulo:titulo, paginas:paginas, fecha_publicacion:año, editorial:editorial}, id], (error, results) => {
        if(error){
            throw (error);
        }
        res.redirect('/');
    })
}