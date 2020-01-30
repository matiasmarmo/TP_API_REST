const Curso = require('../models/Curso');

const { validationResult } = require('express-validator');

const postCurso = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 10,
            message: errors.array()
        })
    }

    const body = req.body;

    const newCurso = new Curso({
        anioDictado: body.anioDictado, 
        duracion: body.duracion,
        tema: body.tema,
        alumnos: body.alumnos
    });

    newCurso.save()
        .then(created => {
            res.status(201).json({
                code: 0,
                message: created
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};

const deleteCurso = (req, res, next) => {
    const id = req.params.id;

    Curso.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({
                code: 0,
                message: "Curso eliminado correctamente"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};

const getCursosPorFiltro = (req, res, next) => {
    const query = req.query;

    Curso.find(query)
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

module.exports = { postCurso, deleteCurso, getCursosPorFiltro };