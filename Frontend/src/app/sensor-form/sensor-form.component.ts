import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators, ValidatorFn, AbstractControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {StationService} from "./../service/station.service";
import {SensorService} from "./../service/sensor.service";
import {SensorTypeService} from "./../service/sensor-type.service";

@Component({
  selector: "app-sensor-form",
  templateUrl: "./sensor-form.component.html",
  styleUrls: ["./sensor-form.component.scss"]
})
export class SensorFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private stationService: StationService,
    private sensorService: SensorService,
    private sensorTypeService: SensorTypeService
  ) {
  }

  sensorFormGroup;
  sensorTypeList;
  stationList;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.sensorFormGroup = this.fb.group({
      id: [null],
      name: ["", Validators.required],
      description: ["", Validators.required],
      invalid: [false],
      sensorType: [[]],
      station: [null],
      validFrom: [null, Validators.required],
      validTo: [null, [Validators.required, this.inFutureValidator()]],
    });
    if (id) {
      this.sensorService.getSensor(id).subscribe(response => {
        this.sensorFormGroup.patchValue(response);
      });
    }
    this.sensorTypeService.getSensorTypes().subscribe(response => {
      this.sensorTypeList = response;
    });
    this.stationService.getStations().subscribe(response => {
      this.stationList = response;
    });

  }
  inFutureValidator(): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null =>
    {
      let dateUnderTest = new Date(control.value); let today = new Date();
      const forbidden =  dateUnderTest < today;
      return forbidden ? {"notInFuture" : {value: control.value}} : null;
    };
  }

  createSensor() {
    const sensor = this.sensorFormGroup.value;
    if (sensor.id) {
      this.sensorService.updateSensors(sensor).subscribe(() => {
        alert("update successfully");
      });
    } else {
      this.sensorService.addSensors(sensor).subscribe((response: any) => {
        this.router.navigate(["/sensor-list/"]);
      });
    }
  }
}
