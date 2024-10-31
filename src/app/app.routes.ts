import { Routes } from '@angular/router';

import {PosientComponent} from "./posient/posient.component";
import {SingUpComponent} from "./sing-up/sing-up.component";
import {LoginComponent} from "./login/login.component";
import {IndexComponent} from "./index/index.component";
import {ClinicComponent} from "./clinic/clinic.component";


export const routes: Routes = [
  {path:'index', component:IndexComponent},
  {path:'',redirectTo: '/index', pathMatch: 'full'},
  {path:'sing-up',component:SingUpComponent},
  {path:'login',component:LoginComponent},
  {path:'posient', component:PosientComponent},
  {path:'clinic', component: ClinicComponent}

];



