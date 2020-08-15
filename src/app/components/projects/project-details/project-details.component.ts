import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsComponent } from '../../../shared/details/details.component';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent extends DetailsComponent implements OnInit {

  constructor(route: ActivatedRoute, private projectService: ProjectService) {
    super(route);
    this.serviceInstance = projectService;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  afterGetItem(item) {
    // super.afterGteItem(item);
    console.log(item);
  }

}
