import { KEY } from './fireKey';

const fireConfig = {
  apiKey: KEY,
  authDomain: "ng2app-aastha.firebaseapp.com",
  databaseURL: "https://ng2app-aastha.firebaseio.com",
  projectId: "ng2app-aastha",
  storageBucket: "",
  messagingSenderId: "40037199027"
};
export const environment = {
  production: true,
  fireConfig: fireConfig
};
