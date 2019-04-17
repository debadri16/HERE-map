import { Component, OnInit, OnChanges, NgZone } from '@angular/core';
import { MapService } from '../map/map.service';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';
import { ShopsService } from '../shops/shops.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: any;
  loaded = false;
  spinner = true;
  constructor(private ngZone: NgZone, private router: Router, private shopsService: ShopsService, private mapService: MapService, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams) => this.onURLChange(this.route.snapshot.params['query'], queryParams['filter'])
    );
    this.route.params.subscribe(
      (params: Params) => this.onURLChange(params['query'], this.route.snapshot.queryParams['filter'])
    );
  }

  public closeListView() {
    this.router.navigate(['']);
  }

  onURLChange(query: string, filter: string) {
    this.spinner = true;
    this.loaded = false;
    if (filter === 'Shops') {
      this.shopsService.getShopsByName(query).subscribe(
        (response) => {
          this.items = response;
          this.mapService.onLoadedShops.emit(response);
          if (this.items.length === 0)
            console.log('No results found');
          else
            this.loaded = true;
            //console.log(this.items);
          this.spinner = false;
        }
      );
    } else if (filter === 'none') {
      this.mapService.onSearch.emit(query);
      this.mapService.onLoadedPlaces.subscribe(
        (response) => {
          this.ngZone.run(
            () => {
              this.items = response.results.items;
              if (this.items.length === 0)
                console.log('No results found');
              else
                this.loaded = true;
                console.log(this.items);
              this.spinner = false;
            }
          )
        }
      );
    }
  }
}
