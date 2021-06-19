import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import { ProfileAdminComponent } from './admin/profile-admin/profile-admin.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeListAdminComponent } from './admin/employe-list-admin/employe-list-admin.component';
import { AddEmployeAdminComponent } from './admin/add-employe-admin/add-employe-admin.component';
import { CommerciauxListAdminComponent } from './admin/commerciaux-list-admin/commerciaux-list-admin.component';
import { AffecTaskAdminComponent } from './admin/affec-task-admin/affec-task-admin.component';
import { ClientsListAdminComponent } from './admin/clients-list-admin/clients-list-admin.component';
import { FeedbackClientAdminComponent } from './admin/feedback-client-admin/feedback-client-admin.component';
import { GerantComponent } from './gerant/gerant.component';
import { SidebarGerantComponent } from './gerant/sidebar-gerant/sidebar-gerant.component';
import { ClientsListGerantComponent } from './gerant/clients-list-gerant/clients-list-gerant.component';
import { AddTaskGerantComponent } from './gerant/add-task-gerant/add-task-gerant.component';
import { TaskListGerantComponent } from './gerant/task-list-gerant/task-list-gerant.component';
import { CommercialeComponent } from './commerciale/commerciale.component';
import { SidebarCommercialeComponent } from './commerciale/sidebar-commerciale/sidebar-commerciale.component';
import { TasksCommercialeComponent } from './commerciale/tasks-commerciale/tasks-commerciale.component';
import { ClientComponent } from './client/client.component';
import { SidebarClientComponent } from './client/sidebar-client/sidebar-client.component';
import { SendFeedbackClientComponent } from './client/send-feedback-client/send-feedback-client.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarAdminComponent,
    ProfileAdminComponent,
    AdminComponent,
    EmployeListAdminComponent,
    AddEmployeAdminComponent,
    CommerciauxListAdminComponent,
    AffecTaskAdminComponent,
    ClientsListAdminComponent,
    FeedbackClientAdminComponent,
    GerantComponent,
    SidebarGerantComponent,
    ClientsListGerantComponent,
    AddTaskGerantComponent,
    TaskListGerantComponent,
    CommercialeComponent,
    SidebarCommercialeComponent,
    TasksCommercialeComponent,
    ClientComponent,
    SidebarClientComponent,
    SendFeedbackClientComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
