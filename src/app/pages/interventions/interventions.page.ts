import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-interventions',
    templateUrl: './interventions.page.html',
    styleUrls: ['./interventions.page.scss'],
})
export class InterventionsPage implements OnInit {
    public constructor(private router: Router) { }

    public ngOnInit() {

    }

    public toFarmacologia() {
        this.router.navigate(['farmacologia-info']);
    }
}
