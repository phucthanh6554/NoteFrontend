import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotebookServiceService} from '../notebook-service.service';
//import {FlashmessageService} from '../../flashmessage.service';
import {LoadingService} from '../../loading.service';

@Component({
  selector: 'app-notebook-editor',
  templateUrl: './notebook-editor.component.html',
  styleUrls: ['./notebook-editor.component.css']
})
export class NotebookEditorComponent implements OnInit {
  mode: string; // create or edit
  id : number; // id of notebook (edit mode)
  current_mode : string;

  title: string;
  description : string;

  button_name : string = 'Create';

  constructor(private route: ActivatedRoute, 
    private notebookService : NotebookServiceService,
    //private messageService : FlashmessageService,
    private loadingservice : LoadingService,
    private router: Router) { }

  ngOnInit(): void {
    this.mode = this.route.snapshot.url[0].path; // get mode from path

    if(this.mode == 'edit')
    {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.button_name = 'Edit';
      this.getNotebook();
    }else{
      this.current_mode = 'Create new Notebook';
    }
  }

  onClick(): void{
    this.loadingservice.setLoad();
    if(this.mode == 'create')
      this.createNotebook();
    else if(this.mode == 'edit')
      this.updateNotebook();
  }

  createNotebook(){
    let body = {
      title: this.title,
      description : this.description
    }
    this.notebookService.createNotebook(body)
      .subscribe(data => {
        if(data.body.status == 'Ok')
        {
         // this.messageService.setMessage('Tao moi thanh cong');
          this.loadingservice.stopLoad();
          this.router.navigate(['/notebook/list']);
        }
      },
      err => {
        alert('Co loi xay ra oi');
        this.loadingservice.stopLoad();
      })
  }

  updateNotebook()
  {
    let body = {
      notebook_id: this.id,
      title: this.title,
      description : this.description
    }

    this.notebookService.updateNotebook(body)
      .subscribe(data => {
        if(data.body.status == 'Ok')
        { 
          this.router.navigate(['/notebook/list']);
          this.loadingservice.stopLoad();
        }
      },
      err => {
        alert('Co loi xay ra oi');
        this.loadingservice.stopLoad();
      })
  }

  private getNotebook()
  {
    this.notebookService.getNotebook(this.id)
      .subscribe(data => {
        this.title = data.body.title;
        this.description = data.body.description;
        this.current_mode = 'Edit notebook ' + data.body.title;
      },
      err => {
        console.log(err);
      })
  }

}
