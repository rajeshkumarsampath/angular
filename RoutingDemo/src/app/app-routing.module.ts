import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { ContactusComponent } from 'app/contactus/contactus.component';
import { AboutComponent } from 'app/about/about.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { ServicesComponent } from 'app/services/services.component';
import { AngularComponent } from 'app/services/angular/angular.component';
import { NodeComponent } from 'app/services/node/node.component';
import { ReactComponent } from 'app/services/react/react.component';

const routes: Routes = [
  {  path: 'home', component: HomeComponent },
  {  path: 'aboutus', component: AboutComponent },
  {  path: 'contactus', component: ContactusComponent },
  {  path: 'services',  component: ServicesComponent,
     children: [
        {path: 'angular', component: AngularComponent},
        {path: 'react', component: ReactComponent},
        {path: 'node', component: NodeComponent}
     ]
  },
  /*{ path: '', pathMatch: 'full', redirectTo: '/aboutus'},*/
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
