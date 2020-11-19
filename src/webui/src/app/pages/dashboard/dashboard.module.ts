import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard.routing.module";
import {UserService} from "../../sevices/shared/user.service";


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  providers: [UserService],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
