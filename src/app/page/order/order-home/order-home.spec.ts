import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHome } from './order-home';

describe('OrderHome', () => {
  let component: OrderHome;
  let fixture: ComponentFixture<OrderHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
