const siege = require('siege');

// Define la prueba de carga
siege()
  .on(9000) // Puerto de la aplicación web
  .for(100).times // Número de solicitudes a realizar
  .concurrent(10) // Número de solicitudes simultáneas
  .get('/careers') // Ruta de la solicitud HTTP
  .attack(); // Inicia la prueba de carga
