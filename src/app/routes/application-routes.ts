import { Routes } from '@angular/router';

export const ROUTES:Routes = [
    {
        path:'books',
        loadChildren:'app/modules/books/books.module#BooksModule'
    },
    {
        path:'**',
        redirectTo:'books'
    }
];