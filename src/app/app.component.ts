import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MetroTransitService } from './metro-transit.service';
import { Synth } from 'tone';
import * as moment from 'moment';

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
        return this.service.getStopInfo(19490).pipe(
          map(response => {
            const first = response[0];
            const departureText = first.DepartureText;
            const splitText = departureText.split(' ');
            const now = moment();
            const time = now.hours();
            const day = now.weekday();
            if (
              splitText === 'Due' &&
              time > 8 &&
              time < 10 &&
              day > 0 &&
              day < 6
            ) {
              const synth = new Synth().toMaster();
              synth.triggerAttackRelease('c4');
            }
            return splitText[0];
          })
        );
      })
    );
  }
}
