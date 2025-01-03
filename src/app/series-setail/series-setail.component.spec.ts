import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesSetailComponent } from './series-setail.component';

describe('SeriesSetailComponent', () => {
  let component: SeriesSetailComponent;
  let fixture: ComponentFixture<SeriesSetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeriesSetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesSetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
