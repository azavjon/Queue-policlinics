import { Component } from '@angular/core';
import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidebarMenuComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
}
