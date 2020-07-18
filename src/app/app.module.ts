import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PermissionComponent } from './permission/permission.component';
import { TitleComponent } from './title/title.component';
import { ButtonComponent } from './button/button.component';
import { PermissionTableComponent } from './permission-table/permission-table.component';
import { TableItemComponent } from './permission-table/table-item/table-item.component';
import { CheckboxItemComponent } from './permission-table/table-item/checkbox-item/checkbox-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PermissionComponent,
    TitleComponent,
    ButtonComponent,
    PermissionTableComponent,
    TableItemComponent,
    CheckboxItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
