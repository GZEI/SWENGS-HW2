import {LoginComponent} from "./login/login.component";
import {StationListComponent} from "./station-list/station-list.component";
import {StationFormComponent} from "./station-form/station-form.component";
import {SensorFormComponent} from "./sensor-form/sensor-form.component";
import {SensorListComponent} from "./sensor-list/sensor-list.component";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: "", redirectTo: "sensor-list", pathMatch: "full"},
  {
    path: "sensor-list",
    component: SensorListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sensor-form",
    component: SensorFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "station-list",
    component: StationListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "station-form",
    component: StationFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "station-form/:id",
    component: StationFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sensor-form/:id",
    component: SensorFormComponent,
    canActivate: [AuthGuard]
  },
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
