import { Routes } from '@angular/router';

import {PosientComponent} from "./posient/posient.component";
import {SingUpComponent} from "./sing-up/sing-up.component";
import {LoginComponent} from "./login/login.component";
import {IndexComponent} from "./index/index.component";
import {ClinicComponent} from "./clinic/clinic.component";
import {AdminComponent} from "./admin/admin.component";
import {QueueComponent} from "./queue/queue.component";
import {DoctorsComponent} from "./doctors/doctors.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import { MainComponent } from "./main/main.component";
import { MAIN_ROUTES } from "./main/main.routing";


export const routes: Routes = [
  {path:'index', component:IndexComponent},
  {path:'',redirectTo: '/index', pathMatch: 'full'},
  {path:'sing-up',component:SingUpComponent},
  {path:'login',component:LoginComponent},
  {path:'posient', component:PosientComponent},
  {path:'clinic', component: ClinicComponent},

  {
    path:'admin',
    loadChildren: (): Promise<any> => import('./main/main.routing').then(m => m.MAIN_ROUTES)
  },



];



