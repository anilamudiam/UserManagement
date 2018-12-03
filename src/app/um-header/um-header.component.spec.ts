import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmHeaderComponent } from './um-header.component';

describe('UmHeaderComponent', () => {
  let component: UmHeaderComponent;
  let fixture: ComponentFixture<UmHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
