import { Component, OnInit, OnDestroy,ChangeDetectorRef } from '@angular/core';
import { TodoBackendService } from '../../../service-layer/services';

@Component({
    templateUrl: './home-page.html',
    styles: ['./home-page.less'],
    selector: 'app-home-page'
})
export class AppHomePageComponent implements OnInit {
    public todos:any[];

    constructor(
        private $_tdb: TodoBackendService,
        private $_cdr:ChangeDetectorRef
    ) { }

    ngOnInit() {
        
    }

    login() {
        this.$_tdb.login().then( (success) => {
            console.log(success);
            this.$_cdr.detectChanges();
            this.$_tdb.todoListSubscriber().subscribe(res => {
                console.log(res);
                this.todos = res;
                this.$_cdr.detectChanges();
            })
        },(err) => {
            console.log(err);
        })
    }
}
