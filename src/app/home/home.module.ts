import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { Impressum2Component } from './impressum2/impressum2.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { InfoItemComponent } from './info-item/info-item.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatCardModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    HomeComponent,
    InfoItemComponent,
    InfoBoxComponent,
    ImpressumComponent,
    Impressum2Component
  ]
})
export class HomeModule {}
