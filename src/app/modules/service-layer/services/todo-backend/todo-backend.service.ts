import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

@Injectable()
export class TodoBackendService {
    constructor(
        private $_fs: AngularFirestore,
        private $_fsauth: AngularFireAuth
    ) { }

    public login() {
        return this.$_fsauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public todoListSubscriber(): Observable<any> {
        return this.$_fs.collection('todos').valueChanges();
    }
}