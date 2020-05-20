import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {apiUrl} from '../env';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private rootUrl = apiUrl + '/note';
  private token;

  constructor(private http : HttpClient) { 
    this.token = localStorage.getItem('JWT_token');
  }

  getNotes(notebook_id : number) : Observable<any>{
    let url = this.rootUrl + '/getAll';
    let body = {
      token : this.token,
      notebook_id : notebook_id.toString()
    }

    return this.http.get<any>(url, {params: body, observe: 'response'});
  }

  getNote(note_id: number) : Observable<any>{
    let url = this.rootUrl + '/get';
    let body = {
      token : this.token,
      note_id : note_id.toString()
    }

    return this.http.get<any>(url, {params : body, observe: 'response'});
  }

  createNote(data : any){
    let url = this.rootUrl + '/create';
    data.token = this.token;

    return this.http.post<any>(url, data, {observe: 'response'});
  }

  updateNote(data : any){
    let url = this.rootUrl + '/update';
    data.token = this.token;

    return this.http.post<any>(url, data, {observe: 'response'});
  }

  deleteNote(data : any)
  {
    let url = this.rootUrl + '/delete';
    data.token = this.token;

    return this.http.post<any>(url, data, {observe: 'response'});
  }
}
