import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffledComponent } from './shuffled.component';

describe('ShuffledComponent', () => {
  let component: ShuffledComponent;
  let fixture: ComponentFixture<ShuffledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShuffledComponent]
    });
    fixture = TestBed.createComponent(ShuffledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
