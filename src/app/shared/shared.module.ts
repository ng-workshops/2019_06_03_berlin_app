import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import { CanClickDirective } from './directives/can-click.directive';
import { FloatValidatorDirective } from './input-float/float.validator.directive';
import { InputFloatComponent } from './input-float/input-float.component';
import { HostElementService } from './modal/host/host-element.service';
import { ModalComponent } from './modal/modal.component';
import { JoinPipe } from './pipes/join.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    CanClickDirective,
    InputFloatComponent,
    FloatValidatorDirective,
    ModalComponent,
    JoinPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputFloatComponent,
    FloatValidatorDirective,
    JoinPipe,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    CanClickDirective
  ],
  entryComponents: [ModalComponent],
  providers: [HostElementService]
})
export class SharedModule {}
