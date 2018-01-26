import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomePageComponent } from './components';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AppHomePageComponent
    ],
    providers: [],
    exports: [
        AppHomePageComponent
    ]
})
export class HomeModule {
    constructor() {

    }
}
