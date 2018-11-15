import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
// import {FormControl, Validators} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,MatFormFieldModule,MatInputModule,MatAutocompleteModule,MatSelectModule,MatTableModule,MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,MatFormFieldModule,MatInputModule,MatAutocompleteModule,MatSelectModule,MatTableModule,MatDialogModule],
})

export class MaterialModule { }