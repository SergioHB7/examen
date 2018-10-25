import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KygoPage } from './kygo';

@NgModule({
  declarations: [
    KygoPage,
  ],
  imports: [
    IonicPageModule.forChild(KygoPage),
  ],
})
export class KygoPageModule {}
