import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsComponent } from './cards.component';


// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { FranchiseListComponent } from './franchise-list.component';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule
  ],
  declarations: [
    CardsComponent,
    FranchiseListComponent
  ]
})
export class BaseModule { }
