import { Component, OnInit } from '@angular/core';
import { MapService } from '../map/map.service';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.css']
})
export class SearchMapComponent implements OnInit {

  query: string;

  constructor(private mapServie: MapService) { }

  ngOnInit() {
  }

  onSearch(query) {
    this.mapServie.onSearch.emit(query);
  }

}
