import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  getStarships = () => this.http.get(' https://swapi.dev/api/starships/');
}
