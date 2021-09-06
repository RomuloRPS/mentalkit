import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-farmacologia-info',
    templateUrl: './farmacologia-info.page.html',
    styleUrls: ['./farmacologia-info.page.scss'],
})
export class FarmacologiaInfoPage implements OnInit {
    public constructor(private router: Router,
    ) { }

    public ngOnInit() {
    }

    public toFarmacologiaDescription() {
        this.router.navigate(['farmacologia-description']);
    }

    public toFarmacologiaROI() {
        this.router.navigate(['farmacologia-agrupado']);
    }
}
