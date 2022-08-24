import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInfoOrderComponent } from './header-info-order.component';

describe('HeaderInfoOrderComponent', () => {
  let component: HeaderInfoOrderComponent;
  let fixture: ComponentFixture<HeaderInfoOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInfoOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInfoOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
