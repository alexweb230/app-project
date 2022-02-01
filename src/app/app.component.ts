import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'rx-js';

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.getData();
    this.getDataPluck();
  }



  getData(): void {
    this.service.getData().pipe(
      map(value => {
         return value;
      }),
      map(value => {
       return value.filter(user => user.status === 'inactive');
      }),
      map(value => {
          const res = value.reduce((acc, item) => {
           return acc + item.age
          }, 0);
          return res;
       })
    ).subscribe(res => {
        console.log(res);
    })
  }


  getDataPluck(): void {
    this.service.getData().pipe(
      pluck('address', 'house'),
      map(val => console.log(val))

    ).subscribe(res => {
        console.log(res);
    })
  }

}

