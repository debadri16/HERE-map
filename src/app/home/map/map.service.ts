import { Injectable, EventEmitter } from '@angular/core';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  lat: string;
  lng: string;

  constructor() { }

  onCurrentLocation = new EventEmitter<{}>();
  onSearch = new EventEmitter<string>();
  onLoaded = new EventEmitter<any>();

}
