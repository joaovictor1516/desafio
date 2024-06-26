import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReleaseComponent } from './order-release.component';

describe('OrderReleaseComponent', () => {
  let component: OrderReleaseComponent;
  let fixture: ComponentFixture<OrderReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderReleaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
