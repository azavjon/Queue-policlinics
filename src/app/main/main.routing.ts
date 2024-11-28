import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'queue',
        pathMatch: 'full'
      },
      {
        path: 'queue',
        loadChildren: (): any => import('../queue/queue.routing').then(m => m.QueueRouting),
      },
      // {
      //   path: 'schedule',
      //   loadChildren: () => import('../schedule/schedule.routing').then(m => m.ScheduleRouting),
      // },
      {
        path: 'doctors',
        loadChildren: () => import('../doctors/dostors.routing').then(m => m.DostorsRouting),
      },

    ]
  }
];
