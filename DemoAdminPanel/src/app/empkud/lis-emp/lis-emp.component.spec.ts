import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisEmpComponent } from './lis-emp.component';

describe('LisEmpComponent', () => {
  let component: LisEmpComponent;
  let fixture: ComponentFixture<LisEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
