const cursosRouter = require('express').Router();

const { postCurso, deleteCurso, getCursosPorFiltro } = require('./cursosController');
const { postValidators } = require('./cursosValidators');
const { getAlumnos, getMejorAlumno } = require('../alumnoCRUD/alumnoController');

// Listar cursos con filtro x duracion
// Listar cursos con filtro x año dictado
cursosRouter.get('/', getCursosPorFiltro);
// Crear cursos
cursosRouter.post('/', postValidators, postCurso);
// Eliminar cursos
cursosRouter.delete('/:id', deleteCurso);
// Obtener los alumnos de un curso
cursosRouter.get('/:id/alumnos', getAlumnos);
// Obtener alumno con mayor nota de un curso
cursosRouter.get('/:id/mejorAlumno', getMejorAlumno);


module.exports = cursosRouter;