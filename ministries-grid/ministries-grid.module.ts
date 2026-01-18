import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistriesGridComponent } from './ministries-grid.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [MinistriesGridComponent ],
  exports: [MinistriesGridComponent ]
})
export class MinistriesGridComponentModule {}
