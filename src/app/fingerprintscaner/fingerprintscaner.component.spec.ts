import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintscanerComponent } from './fingerprintscaner.component';

describe('FingerprintscanerComponent', () => {
  let component: FingerprintscanerComponent;
  let fixture: ComponentFixture<FingerprintscanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingerprintscanerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FingerprintscanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
