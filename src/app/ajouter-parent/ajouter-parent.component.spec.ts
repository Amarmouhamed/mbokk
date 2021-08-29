import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterParentComponent } from './ajouter-parent.component';

describe('AjouterParentComponent', () => {
  let component: AjouterParentComponent;
  let fixture: ComponentFixture<AjouterParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
