import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RevisionsEditPage } from './revisions-edit.page';

describe('RevisionsEditPage', () => {
  let component: RevisionsEditPage;
  let fixture: ComponentFixture<RevisionsEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionsEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RevisionsEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
