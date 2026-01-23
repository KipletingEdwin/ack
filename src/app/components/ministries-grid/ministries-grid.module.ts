import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistriesGridComponent } from './ministries-grid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,RouterModule],
  declarations: [MinistriesGridComponent ],
  exports: [MinistriesGridComponent ]
})
export class MinistriesGridComponentModule {}
