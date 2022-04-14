import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './account/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', children: [{ path: '', component: HomeComponent }] },
  {
    path: 'u',
    children: [
      { path: 'signup', component: SignupComponent },
      { path: ':id', component: UserComponent },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
