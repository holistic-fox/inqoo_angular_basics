import { Component, OnInit } from '@angular/core';
import {Starship} from "../../../api/models/starship";
import {SwapiService} from "../../../api/services/swapi.service";
import {map} from "rxjs";

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  starships: Starship[] = [];

  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {
    this.swapi.getStarships().pipe(
      map(data => data.results as Starship[])
    ).subscribe(result => this.starships = result);
  }

}
