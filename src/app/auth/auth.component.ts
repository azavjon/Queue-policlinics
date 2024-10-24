import { Component } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {SingUpComponent} from "./sing-up/sing-up.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent,SingUpComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
