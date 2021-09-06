import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FarmacologiaRoiPage } from './farmacologia-roi.page';

describe('FarmacologiaRoiPage', () => {
  let component: FarmacologiaRoiPage;
  let fixture: ComponentFixture<FarmacologiaRoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmacologiaRoiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FarmacologiaRoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
