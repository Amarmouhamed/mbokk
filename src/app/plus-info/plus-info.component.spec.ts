import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusInfoComponent } from './plus-info.component';

describe('PlusInfoComponent', () => {
  let component: PlusInfoComponent;
  let fixture: ComponentFixture<PlusInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
