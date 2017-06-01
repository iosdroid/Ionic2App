import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LadderPage } from './ladder';

@NgModule({
  declarations: [
    LadderPage,
  ],
  imports: [
    IonicPageModule.forChild(LadderPage),
  ],
  exports: [
    LadderPage
  ]
})
export class LadderPageModule {}
