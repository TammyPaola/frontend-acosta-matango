// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const WEB = 'http://backendacosta-matango.test';
const API = 'http://backendacosta-matango.test/api/v1';
export const environment = {
  production: false,
  WEB,
  STORAGE_URL: WEB + '/storage',
  API_URL_AUTHENTICATION: API + '/authentication',
  API_URL_PRIVATE: API + '/private',
  API_URL_PUBLIC: API + '/public',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
