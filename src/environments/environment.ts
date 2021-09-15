import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'test',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://sarafitest.azurewebsites.net',
    redirectUri: baseUrl,
    clientId: 'test_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone test',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://sarafitest.azurewebsites.net',
      rootNamespace: 'intro.test',
    },
  },
} as Environment;
