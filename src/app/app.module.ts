import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule, } from '@angular/material/snack-bar';
import { MatTableModule, } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent, FormAddComponent, FormComponent, FormDetailsDialogComponent, ProjectsComponent, } from './components';
import { BaseDetailsDialogComponent } from './core/load-items.service';
import { ModalComponent } from './shared/modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { TableComponent } from './shared/table/table.component';
import { ColumnNamePipe } from './shared/pipes/column-name.pipe';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { DetailsComponent } from './shared/details/details.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AuthComponent,
    FormDetailsDialogComponent,
    FormComponent,
    FormAddComponent,
    ProjectsComponent,
    BaseDetailsDialogComponent,
    ModalComponent,
    TableComponent,
    ColumnNamePipe,
    ProjectDetailsComponent,
    DetailsComponent,
  ],
  entryComponents: [BaseDetailsDialogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MaterialFileInputModule,
    ScrollingModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
})
export class AppModule {
}
