import { TestBed } from '@angular/core/testing';

import { OpcoesService } from './opcoes.service';

describe('OpcoesService', () => {
  let service: OpcoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
