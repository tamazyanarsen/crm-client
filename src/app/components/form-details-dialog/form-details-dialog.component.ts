import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-form-details-dialog',
    styleUrls: ['./form-details-dialog.component.scss'],
    templateUrl: './form-details-dialog.component.html',
})
export class FormDetailsDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<FormDetailsDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data) {
    }

    @Input() public dialogTitle = 'Редактирование записи';
    @Input() public form: FormGroup;
    @Input() public submitAction: any = this.emptyFunction;
    @Input() public formFields: any[];
    @Input() public okButtonText = 'Сохранить';
    @Input() public onCancelClick: any = this.onNoClick;

    public emptyFunction() {
    }

    public ngOnInit() {
    }

    public onNoClick() {
        this.dialogRef.close();
    }

}
