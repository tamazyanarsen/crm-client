import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as ld from 'lodash';
import { FormField } from '../models';
import { AuthService } from '../services/auth.service';
import { RequestService } from '../services/request.service';
import { errorHandle } from './error-handling';

export class LoadItems {
    public url: string;
    public opt = {};
    public items: any[];
    public detailsForm: FormGroup;
    public detailsFormFields: FormField[];
    public serviceInstance: any;
    public detailsUpdatedText: string;
    public deletedText: string;
    public addedText: string;
    public form: FormGroup;
    public formFields: FormField[];
    public detailsDialogTitle = 'Редактирование записи';
    public formData = {};

    constructor(protected router: Router, protected requestService: RequestService, protected dialog: MatDialog,
                protected snackBar: MatSnackBar, protected formBuilder: FormBuilder, protected authService: AuthService) {
        this.submitAddItem = this.submitAddItem.bind(this);
    }

    public trackByFn(index, item) {
        return item.id || (index.toString() + Math.random().toString());
    }

    public loadData(url = null) {
        this.requestService.get(url || this.url, this.opt)
            .then((e: any) => {
                if (this.items && this.items.length) {
                    this.items.splice(0, this.items.length, ...e);
                } else {
                    this.items = e;
                }
                this.afterLoad(e);
            }).catch((e: HttpErrorResponse) => {
            if (e.status === 404 || e.status === 401) {
                this.authService.setIsAuth(false);
                this.router.navigate(['/']).then((res) => {
                    console.warn(`navigate to auth: /`, res);
                });
            }
        });
    }

    public clearFormData() {
        this.formData = {};
    }

    public deleteItem(itemId) {
        this.serviceInstance.deleteItem(itemId)
            .then((e) => {
                ld.remove(this.items, (v) => v.id === itemId);
                this.snackBar.open(this.deletedText, 'OK', { duration: 2000 });
                this.loadData();
            })
            .catch((e) => errorHandle(e, this.snackBar));
    }

    public submitAddItem() {
        this.serviceInstance.addItem(Object.assign(this.form.value, this.formData))
            .then((e) => {
                this.clearFormData();
                this.form.reset();
                this.snackBar.open(this.addedText, 'OK', { duration: 2000 });
                this.loadData();
            })
            .catch((e) => errorHandle(e, this.snackBar));
    }

    public afterCloseDetailDialog(result) {

    }

    public beforeSaveData(item, result, formData) {
        return Object.assign(item, result, formData);
    }

    public openDetail(item) {
        this.setForm(item);
        const dialogRef = this.dialog.open(BaseDetailsDialogComponent, {
            data: item,
            width: '50%',
        });
        dialogRef.componentInstance.form = this.detailsForm;
        dialogRef.componentInstance.formFields = this.detailsFormFields;
        dialogRef.componentInstance.detailsDialogTitle = this.detailsDialogTitle;
        dialogRef.afterClosed().subscribe((result) => {
            this.afterCloseDetailDialog(result);
            if (result) {
                if (item && item.id) {
                    const saveData = this.beforeSaveData(item, result, this.formData);
                    this.serviceInstance.updateItem(saveData)
                        .then((e) => {
                            this.afterSaveForm(e);
                            this.clearFormData();
                            this.snackBar.open(this.detailsUpdatedText, 'OK', { duration: 2000 });
                            this.loadData();
                        })
                        .catch((e) => errorHandle(e, this.snackBar));
                } else {
                    this.serviceInstance.addItem(Object.assign(item, result, this.formData))
                        .then((e) => {
                            this.afterSaveForm(e);
                            this.clearFormData();
                            this.snackBar.open(this.detailsUpdatedText, 'OK', { duration: 2000 });
                            this.loadData();
                        })
                        .catch((e) => errorHandle(e, this.snackBar));
                }
            }
        });
    }

    public afterSaveForm(e) {
    }

    public setForm(item) {
        this.detailsForm = this.formBuilder.group({
            ...item,
        });
        this.detailsFormFields = this.formFields;
    }

    public afterLoad(items) {
    }
}

@Component({
    templateUrl: './details.html',
})
export class BaseDetailsDialogComponent {
    public form: FormGroup;
    public formFields: FormField[];
    public detailsDialogTitle = 'Редактирование записи';

    constructor(public dialogRef: MatDialogRef<BaseDetailsDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data, private formBuilder: FormBuilder) {
        // this.form = formBuilder.group({
        //     ...data
        // });
    }
}
