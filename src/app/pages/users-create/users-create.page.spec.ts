import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsersCreatePage } from './users-create.page';

describe('UsersCreatePage', () => {
  let component: UsersCreatePage;
  let fixture: ComponentFixture<UsersCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
