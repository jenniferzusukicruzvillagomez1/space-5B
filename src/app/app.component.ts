import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space-5B';
  data : any{} = {};

  constructor{
    private http:HttpClient;
  }()

  ngOnInit() {
    this.http.get('https://api.spacexdata.com/v4/rockets').suscribe({data} : {anay});
    this.data = data;
  }

}
