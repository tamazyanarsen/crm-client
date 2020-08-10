import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent, ProjectsComponent } from './components';

const routes: Routes = [
    {
        component: AuthComponent,
        path: 'auth',
    },
    {
        component: ProjectsComponent,
        path: 'projects',
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, {
        onSameUrlNavigation: 'reload',
    })],
})
export class AppRoutingModule {
}
