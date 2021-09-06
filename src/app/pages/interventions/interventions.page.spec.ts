import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterventionsPage } from './interventions.page';

describe('InterventionsPage', () => {
  let component: InterventionsPage;
  let fixture: ComponentFixture<InterventionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterventionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
