import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoadItems } from '../../core/load-items.service';
import { Project } from '../../models/Project';
import { AuthService } from '../../services/auth.service';
import { ProjectService } from '../../services/project.service';
import { RequestService } from '../../services/request.service';

@Component({
    styleUrls: ['./projects.component.css'],
    templateUrl: './projects.component.html',
})
export class ProjectsComponent extends LoadItems implements OnInit {

    public url = 'projects';

    addVisible = false;

    constructor(router: Router, requestService: RequestService, dialog: MatDialog,
                snackBar: MatSnackBar, formBuilder: FormBuilder, authService: AuthService, private projectService: ProjectService) {
        super(router, requestService, dialog, snackBar, formBuilder, authService);
        this.form = formBuilder.group({
            ...new Project(),
        });
        this.formFields = [
            { name: 'Имя проекта', formControlName: 'name' },
            { name: 'Дата начала мероприятия', formControlName: 'startDate' },
            { name: 'Дата окончания мероприятия', formControlName: 'endDate' },
            { name: 'Количество участников', formControlName: 'participantsCount' },
            { name: 'Место проведения', formControlName: 'location' },
        ];
        this.serviceInstance = projectService;
    }

    public ngOnInit(): void {
        this.loadData();
    }

    openDetail(item) {
        if (!item) {
            item = new Project();
        }
        super.openDetail(item);
    }

}
