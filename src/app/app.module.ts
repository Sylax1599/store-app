import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


// Application Components
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppProfileComponent} from './app.profile.component';
import {AppBreadcrumbComponent} from './app.breadcrumb.component';
import {AppConfigComponent} from './app.config.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';


// Demo pages
import {AppCodeModule} from './app.code.component';

// Application services
import {BreadcrumbService} from './app.breadcrumb.service';
import {MenuService} from './app.menu.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
        AppCodeModule,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
          })
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppProfileComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppConfigComponent,
        AppBreadcrumbComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}, MenuService, BreadcrumbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
