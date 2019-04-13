import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { Observable } from 'rxjs';

@Injectable()
export class MapResolver implements Resolve<any>{
    constructor(private mapService: MapService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        console.log(route.params['filter']);    
        this.mapService.onSearch.emit({ filter: route.params['filter'], query: route.params['query'] });
        return this.mapService.onLoaded;
    }
}
