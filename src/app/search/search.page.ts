import { Component, OnInit } from '@angular/core';
import { Place } from './place.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchCity: string;
  data: any
  listToShow: Place[]
  foundSearch: [any]
  searchValue: string = ""

  constructor() {
  }

  ngOnInit() {
    this.listToShow = [];
    fetch('./assets/json/city.list.min.json').then(res => res.json())
      .then(json => {
        this.data = json;
      });
  }

  search() {
    this.listToShow.splice(0, this.listToShow.length);
    if (this.searchValue.length < 3) return;
    this.data.forEach(element => {
      if (element.name.toLowerCase().includes(this.searchValue.toLowerCase())) {
        this.listToShow.push(element);
      } else if (element.country.toLowerCase().includes(this.searchValue.toLowerCase())) {
        this.listToShow.push(element);
      }
    });
  }

}
