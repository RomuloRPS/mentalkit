import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tablinks',
    templateUrl: './tablinks.page.html',
    styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {
    public constructor() { }

    public ngOnInit() {
        setTimeout(() => {
        }, 2000);
    }

    public getTasksLength() {
        return 0;
    }
}
