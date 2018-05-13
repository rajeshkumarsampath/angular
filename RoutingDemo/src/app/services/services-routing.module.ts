import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from 'app/services/angular/angular.component';
import { ReactComponent } from 'app/services/react/react.component';
import { NodeComponent } from 'app/services/node/node.component';

const routes: Routes = [
  {path: 'angular', component: AngularComponent},
  {path: 'react', component: ReactComponent},
  {path: 'node', component: NodeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
