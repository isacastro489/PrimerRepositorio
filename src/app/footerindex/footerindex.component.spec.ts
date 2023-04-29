import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterindexComponent } from './footerindex.component';

describe('FooterindexComponent', () => {
  let component: FooterindexComponent;
  let fixture: ComponentFixture<FooterindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
