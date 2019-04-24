import { Component, OnInit } from '@angular/core';
import { MapService } from '../home/map/map.service';
import { ShopsService } from '../home/shops/shops.service';

@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})
export class AddshopComponent implements OnInit {

  public lat: any;
  public lng: any;
  public markerp = false;
  public title: any;
  public type: any;
  public phn: any;
  public shopData: any;

  constructor(private mapService: MapService, private shopsService: ShopsService) {
    this.mapService.afterPickLocation.subscribe((coord) => {
      this.lat = coord.lat;
      this.lng = coord.lng;

      console.log(this.lat + " " + this.lng);
    });
  }

  ngOnInit() {
  }

  onPickLocationEvent() {
    this.markerp = true;
    this.mapService.onPickLocation.emit();
  }

  onCancelEvent() {
    this.lat = "";
    this.lng = "";
    this.markerp = false;
    this.mapService.onCancelPickLocation.emit();
  }

  addShop() {

    //manager id is to be fetched....pore kra hbe
    this.shopData = {
      "latitude": this.lat,
      "longitude": this.lng,
      "managerId": 5,
      "name": this.title,
      "phoneNumber": this.phn,
      "rating": 0,
      "ratingNumber": 0,
      "type": this.type
    }

    this.shopsService.addShop(this.shopData)
      .subscribe(res => {
        //console.log(res);
        alert('Shop added');
      }
      );

    this.mapService.onCancelPickLocation.emit();

    //console.log(this.title + this.type + this.phn);

    this.lat = "";
    this.lng = "";
    this.title = "";
    this.type = "";
    this.phn = "";
    this.markerp = false;
  }

  //pore API use kra por funcs gulo change hbe
  resetShop() {
    console.log('reset');
  }

}
