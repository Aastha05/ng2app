import { Routes } from '@angular/router';
import { BooksAddComponent,BooksEditComponent,
    BooksHomeComponent,BooksListComponent,BooksViewComponent } from '../components';

export const ROUTES:Routes = [
    {
        path:'books',
        component:BooksHomeComponent,
        children:[
            {
                path:'all',
                component:BooksListComponent
            },
            {
                path:'add',
                component:BooksAddComponent
            },
            {
                path:':id',
                component:BooksViewComponent
            },
            {
                path:':id/edit',
                component:BooksEditComponent
            },
            {
                path:'**',
                redirectTo:'all'
            }
        ]
    }
];
