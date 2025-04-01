// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const env = process.env

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: env['FIREBASE_API_KEY'],
    authDomain: env['FIREBASE_AUTH_DOMAIN'],
    projectId: env['FIREBASE_PROJECT_ID'],
    storageBucket: env['FIREBASE_STORAGE_BUCKET'],
    messagingSenderId: env['FIREBASE_MESSAGING_SENDER_ID'],
    appId: env['FIREBASE_APP_ID']
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
