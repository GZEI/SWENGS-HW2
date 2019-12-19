import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) {
  }

  getStations() {
    return this.http.get('/api/stations/');
  }

  addStations(station: any) {
    return this.http.post("/api/stations/", station);
  }

  updateStations(station: any) {
    return this.http.put("/api/stations/" + station.id + "/", station);
  }

  deleteStations(station: any) {
    return this.http.delete('/api/stations/' + station.id + "/");
  }

  getStation(id: any) {
    return this.http.get('/api/stations/' + id + "/");
  }

}

