import { TestBed } from '@angular/core/testing';

import { MenuRouterService } from './menu-router.service';

describe('MenuRouterService', () => {
  let service: MenuRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
