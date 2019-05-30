import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './home/impressum/impressum.component';
import { Impressum2Component } from './home/impressum2/impressum2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'impressum2', component: Impressum2Component },
  {
    path: 'settings',
    loadChildren: 'app/settings/settings.module#SettingsModule'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
