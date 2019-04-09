import { Component, OnInit } from '@angular/core';
import { ShopsService } from './shops.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  constructor(private shopService: ShopsService) { }

  ngOnInit() {
    this.getNearbyShops();
  }

  getNearbyShops() {
    this.shopService.getShops().subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

}
