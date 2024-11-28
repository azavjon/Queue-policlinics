import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

interface SidebarItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
  menus: SidebarItem[] = [
    {
      text: 'Записаться в очередь',
      route: 'queue'
    },

    {
      text: 'Смотреть очередь',
      route: 'doctors'
    },
    // {
    //   text: 'График врачей',
    //   route: 'schedule'
    // },
  ]
}
