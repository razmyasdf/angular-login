import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemeberMeComponent } from './remeber-me.component';

describe('RemeberMeComponent', () => {
  let component: RemeberMeComponent;
  let fixture: ComponentFixture<RemeberMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemeberMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemeberMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
