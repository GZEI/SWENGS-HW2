import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StationTypeService {

  constructor(private http: HttpClient) {
  }

  getStationTypes() {
    return this.http.get<any[]>('/api/stationtypes/');
  }
}
