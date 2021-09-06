import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutrosParametrosPage } from './outros-parametros.page';

describe('OutrosParametrosPage', () => {
  let component: OutrosParametrosPage;
  let fixture: ComponentFixture<OutrosParametrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutrosParametrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutrosParametrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
