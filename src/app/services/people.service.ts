import { Injectable } from '@angular/core';
import { peopleMockData } from '../mocks/mock-data';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ResultSet } from '../models/result-set';
import { Person } from '../models/person';

@Injectable({ providedIn: 'root' })
export class PeopleService {

  constructor( private http: HttpClient) { }

  //TODO: implement using "https://reqres.in/api/users"
  getPeople(): Observable<ResultSet<Person>> {
    return of(peopleMockData);
  }

}
