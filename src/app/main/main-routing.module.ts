import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'ministries',
        loadChildren: () =>
          import('../ministries/ministries.module').then(m => m.MinistriesPageModule)
      },
      {
        path: 'sermons',
        loadChildren: () =>
          import('../sermons/sermons.module').then(m => m.SermonsPageModule)
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../contact/contact.module').then(m => m.ContactPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
