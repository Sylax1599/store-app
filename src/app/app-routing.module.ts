import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import { UrlGuard } from './core/guards/url.guard';

const routes: Routes = [
    {
        path: 'principal',
        component: AppMainComponent,
        loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'inventario',
        component: AppMainComponent,
        loadChildren: () => import('./modules/inventario/inventario.module').then(m => m.InventarioModule),
    },
    {path: '', redirectTo: '/principal', pathMatch: 'full'}, 
    {path: '**', redirectTo: '/notfound'}, 
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
