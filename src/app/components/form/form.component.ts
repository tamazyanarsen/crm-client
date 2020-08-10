import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form',
    styleUrls: ['./form.component.scss'],
    templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

    @Input() public form: FormGroup;
    @Input() public submitAction: any;
    @Input() public formFields: any[];
    @Input() public isFlexColumn = false;

    constructor() {
    }

    public ngOnInit() {
    }

    public changeFunc(field, value) {
        if ('onChangeFunc' in field) {
            field.onChangeFunc(value);
        }
    }

    public fileChange(files, formControlName) {
        if (files.length > 0) {
            this.form.value[formControlName] = files[0];
        }
    }

    public sampleField(type) {
        return ['text', 'password', 'color', 'date', 'number'].includes(type);
    }

    public isCheckbox(type) {
        return type === 'checkbox';
    }

}
