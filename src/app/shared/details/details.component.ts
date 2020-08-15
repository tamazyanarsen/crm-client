import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.itemId = route.snapshot.params.id;
  }

  itemId: null;
  serviceInstance = null;
  item = null;

  ngOnInit(): void {
    this.getItem().then(e => {
      this.afterGetItem(e);
      this.item = e;
    }).catch(console.error);
  }

  afterGetItem(item) {
  }

  getItem() {
    return this.serviceInstance.getItem(this.itemId);
  }

  updateItem(item) {
    return this.serviceInstance.updateItem(this.item);
  }

  deleteItem(item) {
    return this.serviceInstance.deleteItem(this.itemId);
  }

}
