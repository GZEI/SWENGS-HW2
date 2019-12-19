import {SensorService} from "./../service/sensor.service";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-sensor-list",
  templateUrl: "./sensor-list.component.html",
  styleUrls: ["./sensor-list.component.scss"]
})
export class SensorListComponent implements OnInit {
  sensors: any[];

  constructor(private sensorService: SensorService) {
  }

  displayedColumns = ["name", "description", "validFrom", "validTo", "invalid", "id" ];

  ngOnInit() {
    this.sensorService.getSensors().subscribe((response: any[]) => {
      this.sensors = response;
    });
  }

  deleteSensor(sensor: any) {
    this.sensorService.deleteSensors(sensor).subscribe(() => {
      this.ngOnInit();
    });
  }
}
