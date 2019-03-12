import { TestBed } from '@angular/core/testing';

import { AngularDjangoService } from './angular-django.service';

describe('AngularDjangoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularDjangoService = TestBed.get(AngularDjangoService);
    expect(service).toBeTruthy();
  });
});
