import { TestBed, inject } from '@angular/core/testing';

import { AdminAnalyzeService } from './admin-analyze.service';

describe('AdminAnalyzeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAnalyzeService]
    });
  });

  it('should be created', inject([AdminAnalyzeService], (service: AdminAnalyzeService) => {
    expect(service).toBeTruthy();
  }));
});
