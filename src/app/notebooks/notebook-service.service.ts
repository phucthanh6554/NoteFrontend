import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {apiUrl} from '../env';

@Injectable({
  providedIn: 'root'
})
export class NotebookServiceService {
  private rootUrl = apiUrl + '/notebook';
  private token;
  constructor(private http : HttpClient) { 
    this.token = localStorage.getItem('JWT_token');
  }

  getNotebooks() : Observable<any>{
    let url = this.rootUrl + '/show';
    //let token = localStorage.getItem('JWT_token');

    return this.http.get<any>(url, {params : {token: this.token}, observe: 'response'});
  }

  getNotebook(id : number){
    let url = this.rootUrl + '/get';
    let body = {
      token : this.token,
      notebook_id : id.toString()
    }

    return this.http.get<any>(url, {params : body, observe: 'response'});
  }

  createNotebook(data: any) : Observable<any>{
    let url = this.rootUrl + '/create';
    data.token = this.token;

    return this.http.post<any>(url, data, {observe: 'response'});
  }

  updateNotebook(data : any) : Observable<any>{
    let url = this.rootUrl + '/update';
    data.token = this.token;
    return this.http.post<any>(url, data, {observe: 'response'});
  }

  deleteNotebook(id : number){
    let url = this.rootUrl + '/delete';
    let body = {token: this.token, notebook_id : id};
    return this.http.post<any>(url, body, {observe: 'response'});
  }
}
