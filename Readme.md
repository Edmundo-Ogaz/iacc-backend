# Desafío Técnico: Ingeniero de Desarrollo FullStack

Aplicación backend para la gestión de un estudiante, el cual permite ingrezar un estudiante a una carrerala y la operaciones CRUD sobre el estudiante (crear, leer, actualizar, eliminar y listar).

## Requisitos

Para poder ejecutar esta aplicación se necesita tener instalado Node.js (se recomienda instalar la ultima versión) y un gestor de dependencias como: NPM.

## Instalación

Para instalar esta aplicación es necesario ejecuar el siguiente comando, el cual descargará todas las dependencias que necesita esta aplicación para funcionar.

npm install

Y una vez instaladas las dependencias, hay que ejecutar el siguiente comando iniciar esta.

npm run start

## Uso

Una vez iniciada la aplicación, se puede ingresar a los siguientes links:

Para crear un estudiante, se debe ejecuar el siguiente link y en el cuerpo de este, colocar la información del estudiante, la cual es:

POST: http://[IP]:[PORT]/students

body:

{   "rut": "[rut del studiante]",
    "name": "[nombre del studiante]",
    "phoneNumber": "[telefono del studiante]",
    "email": "[email del studiante]"
}

Para actualizar al estudiante, se debe ejecuar el siguiente link, y en el cuerpo de este, colocar la información que se quiere actualizar.

Para eliminar un estudiante, se debe ejecutar el siguiente link, el cual contiene el ID del estudiante.

Para listar los estudiante, se debe ejecutar el siguiente link.

GET: http://[IP]:[PORT]/students

## Autor

Edmundo Ogaz
edmundo.ogaz@gmail.com

## Licencia

GPL