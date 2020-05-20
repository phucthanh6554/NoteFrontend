import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlashmessageService {

  constructor() { }

  setMessage(message : string): void{
    localStorage.setItem('flash-message', message);
  }

  getMessage(): string{
    let message = localStorage.getItem('flash-message');
    localStorage.removeItem('flash-message');
    return message;
  }
}
