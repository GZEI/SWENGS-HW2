import {StationService} from "./../service/station.service";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-station-list",
  templateUrl: "./station-list.component.html",
  styleUrls: ["./station-list.component.scss"]
})
export class StationListComponent implements OnInit {
  stations: any[];

  constructor(private stationService: StationService) {
  }

  displayedColumns = ["name", "description", "location", "invalid", "id"];

  ngOnInit() {
    this.stationService.getStations().subscribe((response: any[]) => {
      this.stations = response;
    });
  }

  deleteStation(station: any) {
    this.stationService.deleteStations(station).subscribe(() => {
      this.ngOnInit();
    });
  }
}
