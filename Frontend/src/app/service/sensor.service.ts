import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SensorService {
  constructor(private http: HttpClient) {
  }

  getSensors() {
    return this.http.get("/api/sensors/");
  }

  addSensors(sensor: any) {
    return this.http.post("/api/sensors/", sensor);
  }

  updateSensors(sensor: any) {
    return this.http.put("/api/sensors/" + sensor.id +"/", sensor);
  }

  deleteSensors(sensor: any) {
    return this.http.delete("/api/sensors/" + sensor.id + "/");
  }

  getSensor(sensor: any) {
    return this.http.get("/api/sensors/" + sensor + "/");
  }
}
