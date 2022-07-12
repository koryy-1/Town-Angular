import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutEditComponent } from './about-edit/about-edit.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PopulationComponent } from './population/population.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // { path: '', component: AppComponent},
  { path: '', component: HomeComponent},
  { path: 'population', component: PopulationComponent},
  { path: 'aboutMe', component: AboutComponent},
  { path: 'aboutMe/edit', component: AboutEditComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/edit/:id', component: UsersEditComponent},
  // { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
