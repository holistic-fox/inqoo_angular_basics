import { Component, OnInit } from '@angular/core';
import {filter, interval, map, Observable, take, tap} from "rxjs";

@Component({
  selector: 'app-inqoo-clock-v2',
  templateUrl: './inqoo-clock-v2.component.html',
  styleUrls: ['./inqoo-clock-v2.component.scss']
})
export class InqooClockV2Component {

  myCustomInterval: Observable<number> = interval(1000);
}
