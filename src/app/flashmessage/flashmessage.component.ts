import { Component, OnInit, AfterViewChecked} from '@angular/core';
import {FlashmessageService} from '../flashmessage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-flashmessage',
  templateUrl: './flashmessage.component.html',
  styleUrls: ['./flashmessage.component.css']
})
export class FlashmessageComponent implements OnInit{
  flashmessage : string;
  constructor(public service : FlashmessageService, private router : Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() : void{
    this.flashmessage = this.service.getMessage();
  }

}
