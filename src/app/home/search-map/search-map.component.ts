import { Component, OnInit } from '@angular/core';
import { MapService } from '../map/map.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.css']
})
export class SearchMapComponent implements OnInit {

  query: string;
  public selectedFilter: string = "Filters";


  constructor(private mapService: MapService, private router: Router) { }

  ngOnInit() {
  }

  //location search bar
  onClickSearch(query) {
    this.mapService.onSearch.emit(query);
    this.router.navigate(['search']);
  }

  //filters
  onSelectFilter(filter: string){
    this.selectedFilter = filter;
  }

}
