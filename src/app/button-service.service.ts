import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { buttonInterface } from './components/homepage/homepage.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ButtonServiceService {
 getData(): Observable<buttonInterface[]> {
    return (
      this.http
      .get<buttonInterface[]>('../assets/data.json')
      .pipe(
        map((buttons: buttonInterface[]) => {
        return buttons;
      }),
    )
    ) 
  }


  constructor(private http: HttpClient) {
  }
}
