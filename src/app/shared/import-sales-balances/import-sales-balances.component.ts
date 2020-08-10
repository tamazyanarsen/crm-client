import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-import-sales-balances',
    templateUrl: './import-sales-balances.component.html',
    styleUrls: ['./import-sales-balances.component.scss']
})
export class ImportSalesBalancesComponent implements OnInit {
    @Output() fileChange = new EventEmitter<File>();

    constructor() {
    }

    ngOnInit() {
    }

    changeFile(event) {
        const files: FileList = event.target.files;
        if (files && files.length && files.item(0)) {
            const file: File = files.item(0);
            this.fileChange.emit(file);
        }
    }

}
