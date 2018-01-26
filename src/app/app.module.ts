import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * components
 */
import { AppComponent } from './components';

import { ROUTES } from './routes/application-routes';
/**
 * internal modules
 */
import { HomeModule, ServiceLayerModule,BooksModule } from './modules';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HomeModule,
		ServiceLayerModule,
		BooksModule,
		RouterModule.forRoot(ROUTES,{useHash:true})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
