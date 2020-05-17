import { Component, OnInit } from '@angular/core';
import {NotebookServiceService as NotebookService} from '../notebook-service.service';

@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.css']
})
export class NotebookListComponent implements OnInit {
  notebooks;
  constructor(private notebookService : NotebookService) { }

  ngOnInit(): void {
    this.getNotebooks();
  }

  getNotebooks(){
    this.notebookService.getNotebooks()
      .subscribe(data => {
        console.log(data.body);
        this.notebooks = data.body;
      },
      err => {
        console.log(err);
      })
  }

  deleteNotebook(notebook : any)
  {
    this.notebookService.deleteNotebook(notebook.id)
      .subscribe(data => {
        if(data.body.status == 'Ok')
        {
          this.notebooks = this.notebooks.filter(n => n !== notebook);
          alert('Xoa thanh cong');
        }
      },
      err => {
        console.log(err);
      })
  }

}
