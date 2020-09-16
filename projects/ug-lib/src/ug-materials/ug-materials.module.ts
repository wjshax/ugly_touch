import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgRotationComponent } from './ug-rotation/ug-rotation.component';
import { UgRightTopBtnsComponent } from './ug-right-top-btns/ug-right-top-btns.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UgRotationComponent, UgRightTopBtnsComponent],
  exports: [UgRotationComponent, UgRightTopBtnsComponent],
})
export class UgMaterialsModule { }
