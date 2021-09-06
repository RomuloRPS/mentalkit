import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrevalenciaPage } from './prevalencia.page';

describe('PrevalenciaPage', () => {
  let component: PrevalenciaPage;
  let fixture: ComponentFixture<PrevalenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevalenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrevalenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
