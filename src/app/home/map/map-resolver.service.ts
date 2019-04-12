import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { Observable } from 'rxjs';

@Injectable()
export class MapResolver implements Resolve<any>{
    constructor(private mapService: MapService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return true;
    }
}
