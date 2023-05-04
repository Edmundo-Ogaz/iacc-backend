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

####Para gestionar estudiantes:

Obtener todos los estudianes con el método GET

```
http://[IP]:[PORT]:9000/students
````

Crear un estudiante con el método POST (en el body ingresar datos del estudiante)

```
http://[IP]:[PORT]:9000/students
````
 
Obtener un estudiante por id con el método GET

```
http://[IP]:[PORT]:9000/students/[ID]
````

Actualizar un estudiante por id con el método PATCH (en el body ingresar los datos a actualizar)

```
http://[IP]:[PORT]:9000/students/[ID] 
````

Eliminar un estudiante por id con el método DELETE

````
http://[IP]:[PORT]:9000/students/[ID]
````

####Para gestionar carreras:

Obtener todos los carreras con el método GET

````
http://[IP]:[PORT]:9000/careers
````

####Para inscribir un estudiante a una carrera:

Inscribir un estudiante a una carrera con el método POST (en el body ingresar el id del estudiante y el id de la carrera)

````
http://[IP]:[PORT]:9000/enrollment 
````


###Ejemplos:

Para crear un estudiante, se debe ejecuar el siguiente link y en el cuerpo de este, colocar la información del estudiante.


```json
POST: http://[IP]:[PORT]/students

{   
    "rut": "[rut del studiante]",
    "name": "[nombre del studiante]",
    "phoneNumber": "[telefono del studiante]",
    "email": "[email del studiante]"
}
```

Para actualizar al estudiante, se debe ejecuar el siguiente link, y en el cuerpo de este, colocar la información que se quiere actualizar.

```json
PATCH: http://[IP]:[PORT]/students

{   
    "rut": "[rut del studiante]",
    "name": "[nombre del studiante]",
    "phoneNumber": "[telefono del studiante]",
    "email": "[email del studiante]"
}
```

Para eliminar un estudiante, se debe ejecutar el siguiente link, el cual contiene el ID del estudiante.

```json
DELETE: http://[IP]:[PORT]/students/[ID]
```

Para listar los estudiante, se debe ejecutar el siguiente link.

```json
GET: http://[IP]:[PORT]/students
```

Para listar las carreras, se debe ejecutar el siguiente link.

```json
GET: http://[IP]:[PORT]/careers
```

Para ingresar un estudiante a una carrera, se debe ejecuar el siguiente link y en el cuerpo de este, colocar el id de estudiante y el id de la carrera.


```json
POST: http://[IP]:[PORT]/enrollments

{   
    "studenId": "[id del studiante]",
    "careerId": "[id de la carrera]",
}
```

## Pruebas de estres

Para realizar pruebas de estes hay que ejecutar el siguiente comando con la aplicación andando.

````
npm run loadtest
```

## Autor

Edmundo Ogaz
edmundo.ogaz@gmail.com

## Licencia

GPL