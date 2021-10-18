import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_NG_ZORRO_MODULES } from './shared-ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ...SHARED_NG_ZORRO_MODULES],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ...SHARED_NG_ZORRO_MODULES],
})
export class SharedModule {}
