import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutrosCustosPage } from './outros-custos.page';

describe('OutrosCustosPage', () => {
  let component: OutrosCustosPage;
  let fixture: ComponentFixture<OutrosCustosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutrosCustosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutrosCustosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
