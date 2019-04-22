import { Component, OnInit } from '@angular/core';
import { MapService } from '../home/map/map.service';

@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})
export class AddshopComponent implements OnInit {

  public lat : any;
  public lng : any;

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log(this.lat+" "+this.lng);

    this.mapService.afterPickLocation.subscribe((coord)=>{
      this.lat = coord.lat;
      this.lng = coord.lng;
    });
  }

  onPickLocationEvent(){
    this.mapService.onPickLocation.emit();
  }

}
