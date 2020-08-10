import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.projectService.getAllItems().then(console.log).catch(console.error);
  }

}
