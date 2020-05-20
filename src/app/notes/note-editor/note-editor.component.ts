import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NotesService} from '../notes.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {
  mode : string = 'create';

  id : number;
  button_name :string = 'Create';

  title : string;
  content : string;

  notebook_id : number;

  constructor(private noteService : NotesService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.mode = this.route.snapshot.url[0].path; // get mode from path

    if(this.mode == 'create')
      this.notebook_id = +this.route.snapshot.paramMap.get('notebook_id');

    if(this.mode == 'edit')
    {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.button_name = 'Edit';
      this.getNote();
    }
  }

  onClick(): void{
    if(this.mode == 'create')
      this.createNote();
    else
      this.updateNote();
  }

  createNote() : void{
    let body = {
      title : this.title,
      content : this.content,
      notebook_id : this.notebook_id
    }

    this.noteService.createNote(body)
      .subscribe(data => {
        if(data.body.status == 'Ok')
        {
          this.mode = 'edit';
          this.button_name = 'Edit';
          this.id = data.body.note.id;
        }
      }, err => {
        alert('Da xay ra loi');
        console.log(err);
      })
  }

  updateNote() : void{
    let body = {
      title : this.title,
      content : this.content,
      note_id : this.id
    }

    this.noteService.updateNote(body)
      .subscribe(data => {
        if(data.body.status == 'Ok')
          alert('Luu note thanh cong');
      }, err => {
        alert('Da xay ra loi');
        console.log(err);
      })
  }

  private getNote():void{
    this.noteService.getNote(this.id)
      .subscribe(data => {
        this.title = data.body.title;
        this.content = data.body.content;
      },
      err => {
        console.log(err);
      });
  }

}
