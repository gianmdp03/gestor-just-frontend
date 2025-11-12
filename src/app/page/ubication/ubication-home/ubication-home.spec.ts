import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicationHome } from './ubication-home';

describe('UbicationHome', () => {
  let component: UbicationHome;
  let fixture: ComponentFixture<UbicationHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbicationHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicationHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
