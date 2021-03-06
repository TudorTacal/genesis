import Auth0Lock from 'auth0-lock';

export const Lock = new Auth0Lock(
  process.env.AUTH0_CLIENT_ID,
  process.env.AUTH0_CLIENT_DOMAIN,
);

export default Lock;