import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEventService } from './http-event.service';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemEventService } from './event-service'
describe('HttpEventsService', () => {
  let service: HttpEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemEventService)
    ],
    });
    service = TestBed.inject(HttpEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
