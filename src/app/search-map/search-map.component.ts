import { Component, OnInit } from '@angular/core';
import { MapService } from '../map/map.service';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.css']
})
export class SearchMapComponent implements OnInit {

  query: string;
  public selectedFilter: string = "Filters";


  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  //location search bar
  onClickSearch(query) {
    this.mapService.onSearch.emit(query);
  }

  //filters
  onSelectFilter(filter: string){
    this.selectedFilter = filter;
  }

}
