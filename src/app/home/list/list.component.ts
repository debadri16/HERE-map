import { Component, OnInit } from '@angular/core';
import { MapService } from '../map/map.service';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public items = [];
  itemsLoaded = false;
  constructor(private router: Router, private mapService: MapService, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.mapService.onLoaded.subscribe(
      (data) => {
        this.items = data;
        if (this.items.length !== 0) {
          this.itemsLoaded = true;
        }
      }
    )

  }

  public closeListView() {
    this.router.navigate(['']);
    console.log('list view closed');
  }

}
