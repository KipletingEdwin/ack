import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeroComponentModule } from '../components/hero/hero.module';
import { ServiceTimesComponentModule } from '../components/service-times/service-times.module';
import { MinistriesGridComponentModule } from '../components/ministries-grid/ministries-grid.module';
import { SermonHighlightComponentModule } from '../components/sermon-highlight/sermon-highlight.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeroComponentModule,
    ServiceTimesComponentModule,
    MinistriesGridComponentModule,
    SermonHighlightComponentModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
