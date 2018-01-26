import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { environment } from '../../../environments/environment';

import { TodoBackendService } from './services';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.fireConfig),
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    exports: [],
    providers: [
        TodoBackendService
    ]
})
export class ServiceLayerModule {
    constructor(
        
    ) { }
    
}