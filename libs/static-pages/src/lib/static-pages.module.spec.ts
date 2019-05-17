import { async, TestBed } from '@angular/core/testing';
import { StaticPagesModule } from './static-pages.module';

describe('StaticPagesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StaticPagesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StaticPagesModule).toBeDefined();
  });
});
