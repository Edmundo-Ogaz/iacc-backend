# Desafío Técnico: Ingeniero de Desarrollo FullStack

Aplicación backend para la gestión de estudiantes, la cual permite asociar un estudiante a una carrera y además las correspondientes operaciones CRUD para gestionar a los estudiantessobre.

## Requisitos

Para poder ejecutar esta aplicación se necesita tener instalado Node.js (se recomienda instalar la ultima versión) y un gestor de dependencias como NPM.

## Instalación

Para instalar esta aplicación es necesario ejecuar el siguiente comando, el cual descargará todas las dependencias necesarias para el funcionamiento de la aplicación.

```
npm install
````

Y una vez instaladas las dependencias, hay que ejecutar el siguiente comando para iniciar la aplicación.

```
npm run start
````

## Uso

Una vez iniciada la aplicación, se puede ingresar a los siguientes links:

Para gestionar estudiantes:

Obtener todos los estudianes con el método GET: http://[IP]:[PORT]:9000/students
Crear un estudiante con el método POST: http://[IP]:[PORT]:9000/students (en el body ingresar datos del estudiante)
Obtener un estudiante por id con el método GET: http://[IP]:[PORT]:9000/students/[ID]
Actualizar un estudiante por id con el método PATCH: http://[IP]:[PORT]:9000/students/[ID] (en el body ingresar los datos a actualizar)
Eliminar un estudiante por id con el método DELETE: http://[IP]:[PORT]:9000/students/[ID]

Para gestionar carreras:

Obtener todos los carreras con el método GET: http://[IP]:[PORT]:9000/careers

Para inscribir un estudiante a una carrera:

inscribir un estudiante a una carrera con el método POST: http://[IP]:[PORT]:9000/enrollment (en el body ingresar el id del estudiante y el id de la carrera)

Ejemplos:

Para crear un estudiante, se debe ejecuar el siguiente link y en el cuerpo de este, colocar la información del estudiante, la cual es:


```json
POST: http://[IP]:[PORT]/students

{   "rut": "[rut del studiante]",
    "name": "[nombre del studiante]",
    "phoneNumber": "[telefono del studiante]",
    "email": "[email del studiante]"
}
```

Para actualizar al estudiante, se debe ejecuar el siguiente link, y en el cuerpo de este, colocar la información que se quiere actualizar.

Para eliminar un estudiante, se debe ejecutar el siguiente link, el cual contiene el ID del estudiante.

Para listar los estudiante, se debe ejecutar el siguiente link.

```
GET: http://[IP]:[PORT]/students
```

## Autor

Edmundo Ogaz
edmundo.ogaz@gmail.com

## Licencia

GPL