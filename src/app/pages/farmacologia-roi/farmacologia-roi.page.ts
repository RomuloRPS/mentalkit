import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-farmacologia-roi',
    templateUrl: './farmacologia-roi.page.html',
    styleUrls: ['./farmacologia-roi.page.scss'],
})
export class FarmacologiaRoiPage implements OnInit {
  public students = [
      {
          "name": "Custo do programa TRIPLE-P",
          "gender": "R$ 0",
          "country": "R$ 470.220"
      },
      {
          "name": "Custos de serviços de saúde para crianças",
          "gender": "-R$ 2.295.298",
          "country": "-R$ 17.800.051"
      },
      {
          "name": "Repetir ano escolar",
          "gender": "-R$ 11.042.875",
          "country": "-R$ 12.505.202"
      },
      {
          "name": "Auto-mutilação",
          "gender": "-R$ 1.815.690",
          "country": "-R$ 1.815.690"
      },
      {
          "name": "Custos de serviços de saúde para adultos",
          "gender": "R$ 0",
          "country": "-R$ 2.929.596"
      },
      {
          "name": "Justiça Criminal",
          "gender": "-R$ 38.653",
          "country": "-R$ 38.653"
      },
      {
          "name": "Ganhos perdidos até os 50 anos",
          "gender": "R$ 0",
          "country": "-R$ 1.100.763"
      },
      {
          "name": "Custo da gravidez na adolescência",
          "gender": "R$ 0",
          "country": "-R$ 401.233"
      },
      {
          "name": "Custo total (economizando se o valor for negativo)",
          "gender": "-R$ 15.192.516",
          "country": "-R$ 36.591.188"
      },
      {
          "name": "Retorno por real investido",
          "gender": "R$ 68",
          "country": "R$ 78"
      }
  ];

  public showDetails = false;

  public constructor() { }

  public ngOnInit() {
  }

  public moreDetails() {
      this.showDetails = !this.showDetails;
  }
}
