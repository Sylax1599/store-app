import {Component, OnInit} from '@angular/core';
import {MenuService} from './app.menu.service';
import {PrimeNGConfig} from 'primeng/api';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-main',
    templateUrl: './app.main.component.html',
})
export class AppMainComponent {


    constructor(private menuService: MenuService, private primengConfig: PrimeNGConfig, public app: AppComponent) {}

    

}
