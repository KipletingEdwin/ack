import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainPageRoutingModule } from './main-routing.module';
import { MainPage } from './main.page';
import { NavbarComponentModule } from '../components/navbar/navbar.module';
import { FooterComponentModule } from '../components/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    NavbarComponentModule,
    FooterComponentModule,

],
  declarations: [MainPage]
})
export class MainPageModule {}
