import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TripigActions from 'src/app/store/tripig.action';
import * as TripigReducer from 'src/app/store/tripig.reducer';
import { Direction } from 'src/app/models/direction.model';
export interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-point-search',
  templateUrl: './point-search.component.html',
  styleUrls: ['./point-search.component.scss']
})
export class PointSearchComponent implements OnInit {
  searchForm = this.fb.group({
    arrival: ['', Validators.required],
    selectedCategory: ['cafe']
  });
  arrivalKey = 'arrival';
  get arrival(): string {
    return this.searchForm.controls[this.arrivalKey].value;
  }
  selectedCategoryKey = 'selectedCategory';
  get looking(): string {
    return this.searchForm.controls[this.selectedCategoryKey].value;
  }
  get direction(): Direction {
    const direction: Direction = {
      arrival: this.arrival,
      looking: this.looking,
      leaving: ''
    };
    return direction;
  }
  categories: Category[] = [
    { value: 'cafe', viewValue: 'Cafe' },
    { value: 'convenience_store', viewValue: 'Convenience Store' },
    { value: 'food', viewValue: 'food' },
    { value: 'gas_station', viewValue: 'Gas Station' },
    { value: 'park', viewValue: 'Park' },
    { value: 'restaurant', viewValue: 'restaurant' },
    { value: 'spa', viewValue: 'Spa' },
    { value: 'zoo', viewValue: 'Zoo' }
  ];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<TripigReducer.State>
  ) {}

  ngOnInit() {}

  search() {
    this.store.dispatch(
      TripigActions.setDirection({ direction: this.direction })
    );
    this.router.navigate(['/tabs/search/point']);
  }
}
