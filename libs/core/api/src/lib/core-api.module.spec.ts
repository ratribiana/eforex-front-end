import { async, TestBed } from '@angular/core/testing';
import { CoreApiModule } from './core-api.module';

describe('CoreApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreApiModule).toBeDefined();
  });
});
