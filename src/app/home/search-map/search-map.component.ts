import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapService } from '../map/map.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.css']
})
export class SearchMapComponent implements OnInit {
  @ViewChild("searchInput") searchInput : ElementRef;
  @ViewChild("searchButton") searchButton : ElementRef;
  
  query: string;
  public selectedFilter: string = "none";


  constructor(private mapService: MapService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchInput.nativeElement.focus();
  }

  onKeyPress(event){
    if(this.searchInput.nativeElement.value !== "" && event.key ==="Enter"){
      this.searchButton.nativeElement.click();
    }
  }



  //filters
  onSelectFilter(filter: string){
    this.selectedFilter = filter;
  }

}
