import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  BooksHomeComponent, BooksAddComponent, BooksEditComponent,
  BooksListComponent, BooksViewComponent
} from './components';
import { ROUTES } from './routes/books-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    BooksHomeComponent,
    BooksListComponent,
    BooksAddComponent,
    BooksEditComponent,
    BooksViewComponent
  ],
  exports:[
    RouterModule
  ]
})
export class BooksModule { }
