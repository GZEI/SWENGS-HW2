import { StationTypeService } from "./../service/station-type.service";
import { StationService } from "./../service/station.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-station-form",
  templateUrl: "./station-form.component.html",
  styleUrls: ["./station-form.component.scss"]
})
export class StationFormComponent implements OnInit {
  stationFormGroup;
  categoryList: any[];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private stationService: StationService,
    private stationTypeService: StationTypeService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.stationFormGroup = this.fb.group({
      id: [null],
      name: ["", Validators.required],
      location: [null, Validators.required],
      description: ["", Validators.required],
      invalid: [false],
      category: [[]]
    });
    if (id) {
      this.stationService.getStation(id).subscribe(response => {
        this.stationFormGroup.patchValue(response);
      });
    }
    this.stationTypeService.getStationTypes().subscribe(response => {
      this.categoryList = response;
    });
  }
  createStation() {
    const station = this.stationFormGroup.value;
    if (station.id) {
      this.stationService.updateStations(station).subscribe(() => {
        alert("update successfully");
      });
    } else {
      this.stationService.addStations(station).subscribe((response: any) => {
        this.router.navigate(["/station-list/"]);
      });
    }
  }
}
