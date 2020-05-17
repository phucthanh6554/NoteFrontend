import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {apiUrl} from '../env';

@Injectable({
  providedIn: 'root'
})
export class NotebookServiceService {
  private rootUrl = apiUrl + '/notebook';
  constructor(private http : HttpClient) { }

  getNotebooks() : Observable<any>{
    let url = this.rootUrl + '/show';
    let token = localStorage.getItem('JWT_token');

    return this.http.get<any>(url, {params : {token: token}, observe: 'response'});
  }
}
