import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefinitionPage } from './definition.page';

describe('DefinitionPage', () => {
  let component: DefinitionPage;
  let fixture: ComponentFixture<DefinitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefinitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
