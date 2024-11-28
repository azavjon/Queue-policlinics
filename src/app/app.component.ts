import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {PosientComponent} from "./posient/posient.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosientComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
