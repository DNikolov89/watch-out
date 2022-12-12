import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAddedWatchesComponent } from './last-added-watches.component';

describe('LastAddedWatchesComponent', () => {
  let component: LastAddedWatchesComponent;
  let fixture: ComponentFixture<LastAddedWatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastAddedWatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastAddedWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
