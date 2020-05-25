import { Component, OnInit } from '@angular/core';
import {NotebookServiceService as NotebookService} from '../notebook-service.service';
import {LoadingService} from '../../loading.service';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.css']
})
export class NotebookListComponent implements OnInit {
  notebooks;
  constructor(private notebookService : NotebookService,
    private loadingservice : LoadingService,
    private userservice : UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getNotebooks();
    this.loadingservice.setLoad();
  }

  getNotebooks(){
    this.notebookService.getNotebooks()
      .subscribe(data => {
        console.log(data.body);
        this.notebooks = data.body;

        this.loadingservice.stopLoad();
      },
      err => {
        console.log(err);
        alert('Da xay ra loi');
        this.loadingservice.stopLoad();
      })
  }

  deleteNotebook(notebook : any)
  {
    this.loadingservice.setLoad();
    this.notebookService.deleteNotebook(notebook.id)
      .subscribe(data => {
        if(data.body.status == 'Ok')
        {
          this.notebooks = this.notebooks.filter(n => n !== notebook);
          this.loadingservice.stopLoad();
          alert('Xoa thanh cong');
        }
      },
      err => {
        this.loadingservice.stopLoad();
        alert('Da xay ra loi');
        console.log(err);
      })
  }

  logout(): void{
    this.userservice.logout();
    this.router.navigate(['/login']);
  }

}
