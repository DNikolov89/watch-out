import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellWatchComponent } from './sell-watch.component';

describe('SellWatchComponent', () => {
  let component: SellWatchComponent;
  let fixture: ComponentFixture<SellWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
