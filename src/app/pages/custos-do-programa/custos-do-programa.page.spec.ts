import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustosDoProgramaPage } from './custos-do-programa.page';

describe('CustosDoProgramaPage', () => {
  let component: CustosDoProgramaPage;
  let fixture: ComponentFixture<CustosDoProgramaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustosDoProgramaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustosDoProgramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
