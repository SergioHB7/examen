import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChainsPage } from './chains';

@NgModule({
  declarations: [
    ChainsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChainsPage),
  ],
})
export class ChainsPageModule {}
