import { Component, OnInit } from '@angular/core';
import { MapService } from '../map/map.service';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: any;
  constructor(private router: Router, private mapService: MapService, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.items = data['places'];
        console.log(data);
      }
    )
  }

  public closeListView() {
    this.router.navigate(['']);
    console.log('list view closed');
  }

}
