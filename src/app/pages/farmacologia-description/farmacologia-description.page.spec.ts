import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FarmacologiaDescriptionPage } from './farmacologia-description.page';

describe('FarmacologiaDescriptionPage', () => {
  let component: FarmacologiaDescriptionPage;
  let fixture: ComponentFixture<FarmacologiaDescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmacologiaDescriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FarmacologiaDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
