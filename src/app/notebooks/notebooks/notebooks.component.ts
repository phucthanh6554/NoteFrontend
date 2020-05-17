import { Component, OnInit } from '@angular/core';
import {NotebookServiceService as NotebookService} from '../notebook-service.service';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.css']
})
export class NotebooksComponent implements OnInit {
  notebooks;
  constructor(private notebookService : NotebookService) { }

  ngOnInit(): void {
    //this.getNotebooks();
  }

  // getNotebooks(){
  //   this.notebookService.getNotebooks()
  //     .subscribe(data => {
  //       console.log(data.body);
  //       this.notebooks = data.body;
  //     },
  //     err => {
  //       console.log(err);
  //     })
  // }

}
