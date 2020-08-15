import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    constructor() {
    }

    @Input() items: any[];
    @Input() columns: string[] = Object.keys(this.items && this.items.length ? this.items[0] : []);

    @ContentChild(TemplateRef) itemTemplate: TemplateRef<ElementRef>;
    @Input() trackByFn = v => v.id;

    ngOnInit(): void {
    }
}
