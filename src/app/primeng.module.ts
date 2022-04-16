import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { DividerModule } from 'primeng/divider';
import { MultiSelectModule } from 'primeng/multiselect';
import { BadgeModule } from 'primeng/badge';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  imports: [
    SidebarModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    ToastModule,
    CalendarModule,
    SelectButtonModule,
    InputTextareaModule,
    FileUploadModule,
    TooltipModule,
    TableModule,
    InputSwitchModule,
    InputMaskModule,
    DividerModule,
    MultiSelectModule,
    BadgeModule,
    CascadeSelectModule,
    DataViewModule,
  ],
  exports: [
    SidebarModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    ToastModule,
    CalendarModule,
    SelectButtonModule,
    InputTextareaModule,
    FileUploadModule,
    TooltipModule,
    TableModule,
    InputSwitchModule,
    InputMaskModule,
    DividerModule,
    MultiSelectModule,
    BadgeModule,
    CascadeSelectModule,
    DataViewModule,
  ],
})
export class PrimengModule {}
