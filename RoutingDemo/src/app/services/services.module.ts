import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { AngularComponent } from './angular/angular.component';
import { NodeComponent } from './node/node.component';
import { ReactComponent } from './react/react.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  declarations: [ServicesComponent, AngularComponent, NodeComponent, ReactComponent],
  exports: [ServicesComponent, AngularComponent, NodeComponent, ReactComponent]
})
export class ServicesModule { }
