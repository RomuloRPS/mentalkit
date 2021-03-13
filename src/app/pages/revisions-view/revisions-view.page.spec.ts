import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RevisionsViewPage } from './revisions-view.page';

describe('RevisionsViewPage', () => {
  let component: RevisionsViewPage;
  let fixture: ComponentFixture<RevisionsViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionsViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RevisionsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
