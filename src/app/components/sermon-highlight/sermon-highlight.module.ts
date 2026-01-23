import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SermonHighlightComponent } from './sermon-highlight.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [SermonHighlightComponent ],
  exports: [SermonHighlightComponent ]
})
export class SermonHighlightComponentModule {}
