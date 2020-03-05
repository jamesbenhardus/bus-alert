import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MetroTransitService } from './metro-transit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bus-alert';

  stopInfo$: Observable<any>;

  constructor(private service: MetroTransitService) {}

  ngOnInit() {
    this.stopInfo$ = timer(100, 30000).pipe(
      switchMap(() => {
        return this.service.getStopInfo(19490);
      })
    );
  }
}
