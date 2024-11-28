import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "../login/login.component";
import {SingUpComponent} from "../sing-up/sing-up.component";
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, LoginComponent, SingUpComponent, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
