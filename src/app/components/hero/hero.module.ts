import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroComponent } from './hero.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [HeroComponent ],
  exports: [HeroComponent ]
})
export class HeroComponentModule {}
