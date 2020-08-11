import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {

    constructor() {
    }

    @Input() public title: string;
    @Input() public visible = false;
    @Output() public visibleChange = new EventEmitter<boolean>();
    @Input() public cancelAction: any = () => {
    }
    @Input() public doneAction: any = () => {
    }

    actionOnCancelClick = () => {
        this.visibleChange.emit(false);
        this.cancelAction();
    }

    public ngOnInit(): void {
    }

}
