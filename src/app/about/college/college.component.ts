import {Component, Inject, OnInit} from '@angular/core';
import {COLLEGE_ABOUT$} from '../../shared/providers/about.providers';
import {Observable, Subject} from 'rxjs';
import {AboutInterface} from '../../shared/interfaces/about.interface';
import {aboutCollege$} from '../../shared/utils/collage';


@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.scss'],
    providers: [
        {provide: COLLEGE_ABOUT$, useValue: aboutCollege$}
    ]
})

export class CollegeComponent implements OnInit {
    collegeInfo$?: Observable<AboutInterface> = new Subject();

    constructor(
        @Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>
    ) {
    }

    ngOnInit() {
        this.getCollege();
    }

    getCollege(): void {
        this.collegeInfo$ = this.college$;
    }
}
