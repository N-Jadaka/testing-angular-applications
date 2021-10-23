import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter02Component } from './chapter02.component';

fdescribe('Chapter02Component', () => {
  let component: Chapter02Component;
  let fixture: ComponentFixture<Chapter02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chapter02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  describe('Chapter 2 tests', () => {
    it('Our first Jasmine test', () => {
      expect(true).toBe(true);
    });
  });

  it('2 + 2 equals 4', () => {
    expect(2+2).toBe(4);
  })
});
