import { ProfileClComponent } from './client/profile-cl/profile-cl.component';
import { ProfileGerantComponent } from './gerant/profile-gerant/profile-gerant.component';
import { ClientsListGerantComponent } from './gerant/clients-list-gerant/clients-list-gerant.component';
import { CommercialListGerantComponent } from './gerant/commercial-list-gerant/commercial-list-gerant.component';
import { AffecTaskGerantComponent } from './gerant/affec-task-gerant/affec-task-gerant.component';
import { GerantComponent } from './gerant/gerant.component';
import { CommercialeComponent } from './commerciale/commerciale.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeAdminComponent } from './admin/add-employe-admin/add-employe-admin.component';
import { AffecTaskAdminComponent } from './admin/affec-task-admin/affec-task-admin.component';
import { ClientsListAdminComponent } from './admin/clients-list-admin/clients-list-admin.component';
import { CommerciauxListAdminComponent } from './admin/commerciaux-list-admin/commerciaux-list-admin.component';
import { EmployeListAdminComponent } from './admin/employe-list-admin/employe-list-admin.component';
import { FeedbackClientAdminComponent } from './admin/feedback-client-admin/feedback-client-admin.component';
import { ProfileAdminComponent } from './admin/profile-admin/profile-admin.component';
import { SendFeedbackClientComponent } from './client/send-feedback-client/send-feedback-client.component';
import { TasksCommercialeComponent } from './commerciale/tasks-commerciale/tasks-commerciale.component';
import { AddTaskGerantComponent } from './gerant/add-task-gerant/add-task-gerant.component';
import { TaskListGerantComponent } from './gerant/task-list-gerant/task-list-gerant.component';
import { ProfileCommercialeComponent } from './commerciale/profile-commerciale/profile-commerciale.component';


const routes: Routes = [
  {
    path:'admin-profile', component:ProfileAdminComponent
  },
  {
    path:'gerants-list', component:EmployeListAdminComponent
  },
  {
    path:'add-employe', component:AddEmployeAdminComponent
  },
  {
    path:'commerciaux-list', component:CommerciauxListAdminComponent
  },
  {
    path:'affectation-taches', component:AffecTaskAdminComponent
  },
  {
    path:'', component:LoginComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'clients-list', component:ClientsListAdminComponent
  },
  {
    path:'feedback-client', component:FeedbackClientAdminComponent
  },
  {
    path:'add-task-gerant', component:AddTaskGerantComponent
  },
  {
    path:'tasks-list', component:TaskListGerantComponent
  },
  {
    path:'my-tasks', component:TasksCommercialeComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'send-feedback', component:SendFeedbackClientComponent
  },
  {
    path:'client', component:ClientComponent
  },
  {
    path:'admin', component:AdminComponent
  },

  {
    path:'commerciale', component:CommercialeComponent
  },
  {
    path:'gerant', component:GerantComponent
  },
  {
    path:'profile', component:ProfileGerantComponent
  },
  {
    path:'affectation-taches-gerant', component:AffecTaskGerantComponent
  },
  {
    path:'list-commerciale-gérant', component:CommercialListGerantComponent
  },
  {
    path:'list-clients-gerant', component:ClientsListGerantComponent
  },
  {
    path:'profilec', component:ProfileCommercialeComponent
  },
  {
    path:'profilecl', component:ProfileClComponent
  },
  {
    path:'profilead', component:ProfileAdminComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
