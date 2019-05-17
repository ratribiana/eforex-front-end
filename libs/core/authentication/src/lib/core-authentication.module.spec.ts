import { async, TestBed } from '@angular/core/testing';
import { CoreAuthenticationModule } from './core-authentication.module';

describe('CoreAuthenticationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreAuthenticationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreAuthenticationModule).toBeDefined();
  });
});
