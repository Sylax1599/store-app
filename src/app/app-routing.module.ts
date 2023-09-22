import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';

const routes: Routes = [
    {
        path: '', component: AppMainComponent,
    },
    {
        path: 'inventario',
        component: AppMainComponent,
        loadChildren: () => import('./modules/inventario/inventario.module').then(m => m.InventarioModule),
    },
    {path: '**', redirectTo: '/notfound'}, 
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
