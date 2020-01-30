const mongoose = require('mongoose');

const Cliente = require('./schemas/Cliente');

const Curso = new mongoose.Schema({
    anioDictado: { type: Number }, 
    duracion: { type: Number },
    tema: { type: String },
    alumnos: { type: [Cliente] } 
}, {collection: 'cursos'});

module.exports = mongoose.model('Curso', Curso);