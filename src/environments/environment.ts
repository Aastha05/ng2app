// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
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
	'production': false,
	'fireConfig':fireConfig
};
