import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatComponent } from './creat';
import { ListComponent } from './list';

const routes: Routes = [
  {
    path: 'applications',
    component: ListComponent
  },
  { path: 'applications/create', component: CreatComponent },
  { path: 'applications/:name', component: CreatComponent },
  { path: '', redirectTo: '/applications', pathMatch: 'full' },
  { path: '**', redirectTo: '/applications', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
