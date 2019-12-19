import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SensorTypeService {

  constructor(private http: HttpClient) {
  }

  getSensorTypes() {
    return this.http.get<any[]>('/api/sensortypes/');
  }
}
