import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizhubComponent } from './vizhub.component';

describe('VizhubComponent', () => {
  let component: VizhubComponent;
  let fixture: ComponentFixture<VizhubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VizhubComponent]
    });
    fixture = TestBed.createComponent(VizhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
