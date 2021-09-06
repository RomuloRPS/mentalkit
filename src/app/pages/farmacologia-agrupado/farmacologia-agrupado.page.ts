import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ExpenseModel } from 'src/app/coloquent-model/expense/expense.model';

@Component({
    selector: 'app-farmacologia-agrupado',
    templateUrl: './farmacologia-agrupado.page.html',
    styleUrls: ['./farmacologia-agrupado.page.scss'],
})
export class FarmacologiaAgrupadoPage implements OnInit {
    public expense: ExpenseModel;

    public constructor(private router: Router, private navCtrl: NavController ) { }

    public ngOnInit() {
    }

    public toOutroCusto() {
        this.router.navigate(['farmacologia/outros-custos']);
    }

    public toOutroParam() {
        this.router.navigate(['farmacologia/outros-parametros']);
    }

    public toCusto() {
        this.router.navigate(['farmacologia/custos-do-programa']);
    }

    public save() {
        this.router.navigate(['farmacologia-roi']);
    }

    public create() {
        this.router.navigate(['farmacologia-roi']);
    }

    public backToList() {
        this.navCtrl.back();
    }
}
