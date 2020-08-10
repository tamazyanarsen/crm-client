import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoadItems } from '../../core/load-items.service';
import { AuthService } from '../../services/auth.service';
import { ProjectService } from '../../services/project.service';
import { RequestService } from '../../services/request.service';

@Component({
    styleUrls: ['./projects.component.css'],
    templateUrl: './projects.component.html',
})
export class ProjectsComponent extends LoadItems implements OnInit {

    public url = 'projects';

    constructor(router: Router, requestService: RequestService, dialog: MatDialog,
                snackBar: MatSnackBar, formBuilder: FormBuilder, authService: AuthService, private projectService: ProjectService) {
        super(router, requestService, dialog, snackBar, formBuilder, authService);
    }

    public ngOnInit(): void {
        this.loadData();
    }

}
