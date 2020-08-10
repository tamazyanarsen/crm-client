import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    AuthComponent,
    FormAddComponent,
    FormComponent,
    FormDetailsDialogComponent,
    ProjectsComponent,
} from './components';
import { BaseDetailsDialogComponent } from './core/load-items.service';

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
    ],
    entryComponents: [BaseDetailsDialogComponent],
    imports: [
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
    ],
    providers: [],
})
export class AppModule {
}
