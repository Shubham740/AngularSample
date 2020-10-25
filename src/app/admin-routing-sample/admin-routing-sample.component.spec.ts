import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoutingSampleComponent } from './admin-routing-sample.component';

describe('AdminRoutingSampleComponent', () => {
  let component: AdminRoutingSampleComponent;
  let fixture: ComponentFixture<AdminRoutingSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoutingSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoutingSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
