import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsersEditPage } from './users-edit.page';

describe('UsersEditPage', () => {
  let component: UsersEditPage;
  let fixture: ComponentFixture<UsersEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
