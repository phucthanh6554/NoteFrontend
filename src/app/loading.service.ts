import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public _isLoading : boolean = false;
  constructor() { }

  setLoad() : void{
    this._isLoading = true;
  }

  stopLoad() : void{
    this._isLoading = false;
  }
}
