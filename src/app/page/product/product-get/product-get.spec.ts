import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGet } from './product-get';

describe('ProductGet', () => {
  let component: ProductGet;
  let fixture: ComponentFixture<ProductGet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
