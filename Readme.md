# Desafío Técnico: Ingeniero de Desarrollo FullStack

Aplicación backend para la gestión de estudiantes, la cual permite asociar un estudiante a una carrera y además las correspondientes operaciones CRUD para gestionar a los estudiantes.

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

Obtener todos los estudianes con el método GET.

```
GET: http://[IP]:[PORT]:9000/students
````

Crear un estudiante con el método POST (en el body ingresar los datos del estudiante).

```
POST: http://[IP]:[PORT]:9000/students
````
 
Obtener un estudiante por id con el método GET.

```
GET: http://[IP]:[PORT]:9000/students/[ID]
````

Actualizar un estudiante por id con el método PATCH (en el body ingresar los datos a actualizar).

```
PATCH: http://[IP]:[PORT]:9000/students/[ID] 
````

Eliminar un estudiante por id con el método DELETE.

````
DELETE: http://[IP]:[PORT]:9000/students/[ID]
````

####Para gestionar carreras:

Obtener todos las carreras con el método GET.

````
GET: http://[IP]:[PORT]:9000/careers
````

####Para inscribir un estudiante a una carrera:

Inscribir un estudiante a una carrera con el método POST (en el body ingresar el id del estudiante y el id de la carrera).

````
POST: http://[IP]:[PORT]:9000/enrollment 
````

##Modelo:

![](/diagram/iacc.db.png)

##Ejemplos:

Para crear un estudiante, se debe ejecuar el siguiente link y en el cuerpo de este, colocar la información del estudiante.


```
POST: http://[IP]:[PORT]/students
````

Body:

```json
{   
    "rut": "[rut del studiante]",
    "name": "[nombre del studiante]",
    "phoneNumber": "[telefono del studiante]",
    "email": "[email del studiante]"
}
```

Response:

```json
{
    "message": "success"
}
```

Para actualizar un estudiante, se debe ejecuar el siguiente link indicando el ID del estudiante, y en el cuerpo de la solicitud, colocar la información que se quiere actualizar.

```
PATCH: http://[IP]:[PORT]/students/[ID]
````

Body:

```json
{   
    "rut": "[rut del studiante]",
    "name": "[nombre del studiante]",
    "phoneNumber": "[telefono del studiante]",
    "email": "[email del studiante]"
}
```

Response:

```json
{
    "message": "success"
}
```

Para eliminar un estudiante, se debe ejecutar el siguiente link, el cual contiene el ID del estudiante.

```
DELETE: http://[IP]:[PORT]/students/[ID]
```

Response:

```json
{
    "message": "success"
}
```

Para listar los estudiante, se debe ejecutar el siguiente link.

```
GET: http://[IP]:[PORT]/students
```

Response:

```json
[
    {   
        "id": "[id del studiante]",
        "rut": "[rut del studiante]",
        "name": "[nombre del studiante]",
        "phoneNumber": "[telefono del studiante]",
        "email": "[email del studiante]"
    }
]
```

Para listar las carreras, se debe ejecutar el siguiente link.

```
GET: http://[IP]:[PORT]/careers
```

Response:

```json
[
    {
        "id": "[id de la carrera]",
        "name": "[nombre de la carrera]",
    }
]
```
Para ingresar un estudiante a una carrera, se debe ejecuar el siguiente link y en el cuerpo de este, colocar el ID de estudiante y el ID de la carrera.

```
POST: http://[IP]:[PORT]/enrollments
```

Body:

```json
{   
    "studenId": "[id del studiante]",
    "careerId": "[id de la carrera]",
}
```

Response:

```json
{
    "message": "success"
}
```
## Pruebas de estres

Para realizar pruebas de estres hay que ejecutar el siguiente comando con la aplicación funcionando.

````
npm run loadtest
```

## Autor

Edmundo Ogaz
edmundo.ogaz@gmail.com

## Licencia

GPL