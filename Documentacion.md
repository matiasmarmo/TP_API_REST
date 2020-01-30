# Documentación

|Acciones| Metodos | URLs |
|:----------| :------| :-----------|
|Crear curso| POST   | localhost:8080/cursos |
|Eliminar curso| DELETE | localhost:8080/cursos/:id |
|Obtener cursos x duracion| GET    | localhost:8080/cursos?duracion= < number > |
|Obtener cursos x año dictado| GET    | localhost:8080/cursos?anioDictado= < number > |
|Obtener alumnos de un curso| GET    | localhost:8080/cursos/:id/alumnos |
|Obtener alumno con mejor nota de un curso| GET    | localhost:8080/cursos/:id/mejorAlumno |


## Estructura

```sh
{
    anioDictado : { type: Number },
    duracion: { type: Number },
    tema: { type: String },
    alumnos: { [
                    nombre: { type: String },
                    apellido: { type: String },
                    dni: { type: Number },
                    direccion: { type: String },
                    nota: { type: Number }
                ] } 
}
```