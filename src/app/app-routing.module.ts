import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent, ProjectsComponent } from './components';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';

const routes: Routes = [
  {
    component: AuthComponent,
    path: 'auth',
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
  })],
})
export class AppRoutingModule {
}
