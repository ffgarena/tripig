import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { MaterialModule } from 'src/app/material/material.module';
import { MapRouteSearchComponent } from './map-route-search.component';

@NgModule({
  declarations: [MapRouteSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MapRouteSearchComponent }]),
    GoogleMapsModule,
    MaterialModule
  ]
})
export class MapRouteSearchModule { }
