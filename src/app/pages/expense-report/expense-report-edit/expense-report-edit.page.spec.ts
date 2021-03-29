import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpenseReportEditPage } from './expense-report-edit.page';

describe('ExpenseReportEditPage', () => {
  let component: ExpenseReportEditPage;
  let fixture: ComponentFixture<ExpenseReportEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseReportEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseReportEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
