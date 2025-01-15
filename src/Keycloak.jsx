import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080', // Assurez-vous que le chemin `/auth` est correct
  realm: 'cinazone',
  clientId: 'cinema-frontend',
});

export default keycloak;
