import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDComponent } from './acerca-d.component';

describe('AcercaDComponent', () => {
  let component: AcercaDComponent;
  let fixture: ComponentFixture<AcercaDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcercaDComponent]
    });
    fixture = TestBed.createComponent(AcercaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
