import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-add',
    templateUrl: './form-add.component.html',
    styleUrls: ['./form-add.component.scss']
})
export class FormAddComponent implements OnInit {

    @Input() form: FormGroup;
    @Input() submitAction: any;
    @Input() formFields: any[];

    constructor() {
    }

    ngOnInit() {
    }

}
