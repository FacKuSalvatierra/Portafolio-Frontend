import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduycursosComponent } from './eduycursos.component';

describe('EduycursosComponent', () => {
  let component: EduycursosComponent;
  let fixture: ComponentFixture<EduycursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduycursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduycursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
