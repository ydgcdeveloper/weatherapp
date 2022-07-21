import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  weatherTemp: any
  todayDate = new Date();
  cityName: any
  weatherDetails: any
  weatherIcon: any
  paramCity: string
  paramCountry: string
  paramId: string

  constructor(public httpClient: HttpClient, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

    this.paramCity = this.activatedRoute.snapshot.paramMap.get('city');
    this.paramCountry = this.activatedRoute.snapshot.paramMap.get('country') || "";
    this.paramId = this.activatedRoute.snapshot.paramMap.get('id');

    this.httpClient.get(`${API_URL}weather?id=${this.paramId}&appid=${API_KEY}`).subscribe(data => {
      this.weatherTemp = data['main']
      this.cityName = data['name']
      this.weatherDetails = data['weather'][0]
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`
      console.log(this.weatherIcon);
    });
  }

}
