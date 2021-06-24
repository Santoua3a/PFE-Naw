import { RouterModule } from '@angular/router';
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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AffecTaskGerantComponent } from './gerant/affec-task-gerant/affec-task-gerant.component';
import { CommercialListGerantComponent } from './gerant/commercial-list-gerant/commercial-list-gerant.component';
import { ProfileGerantComponent } from './gerant/profile-gerant/profile-gerant.component';
import { ProfileCommercialeComponent } from './commerciale/profile-commerciale/profile-commerciale.component';
import { ProfileClComponent } from './client/profile-cl/profile-cl.component';
import { authInterceptorProviders } from './_auth/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { UserviewComponent } from './userview/userview.component';



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
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AffecTaskGerantComponent,
    CommercialListGerantComponent,
    ProfileGerantComponent,
    ProfileCommercialeComponent,
    ProfileClComponent,
    UserviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
