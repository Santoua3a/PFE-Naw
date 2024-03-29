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
    path:'send-feedback', component:SendFeedbackClientComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
