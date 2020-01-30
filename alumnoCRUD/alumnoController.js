const mongoose = require('mongoose');
const Curso = require('../models/Curso');

const getAlumnos = (req, res, next) => {
    const id = req.params.id;

    Curso.findById(id)
        .then(curso => {
            if (!curso) {
                res.status(404).json({
                    code: 12,
                    message: "Recurso no encontrado"
                });
            } else {
                res.status(200).json({
                    code: 0,
                    message: curso.alumnos
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
               code: 20,
               message: "Ocurrió un error con un módulo interno"
            });
        });
};

const getMejorAlumno = (req, res, next) => {
    const id = req.params.id;
    const objectId = mongoose.Types.ObjectId(id);

    Curso.aggregate([{ $match: { _id: objectId } }, { $unwind : "$alumnos"}, { $sort : { "alumnos.nota" : -1}}, { $limit : 1}, { $project : {alumnos:1 , _id:0}} ])
        .then(curso => {
            if (!curso) {
                res.status(404).json({
                    code: 12,
                    message: "Recurso no encontrado"
                });
            } else {
                res.status(200).json({
                    code: 0,
                    message: curso
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
               code: 20,
               message: "Ocurrió un error con un módulo interno"
            });
        });
};

module.exports = { getAlumnos, getMejorAlumno };