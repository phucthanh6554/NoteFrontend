import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotesService} from '../notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notebook_id : number;
  notes ;
  isEmpty : boolean
  constructor(private route : ActivatedRoute, private noteservice : NotesService) { }

  ngOnInit(): void {
    this.notebook_id = +this.route.snapshot.paramMap.get('notebook_id');

    this.getNotes();
  }

  getNotes()
  {
    this.noteservice.getNotes(this.notebook_id)
      .subscribe(data => {
        this.notes = data.body;
        console.log(data.body.length);
        this.isEmpty = data.body.length == 0 ? true : false;
      },
      err => {
        console.log(err);
      })
  }

  deleteNote(note){
    let data = {
      note_id : note.id,
    }
    this.noteservice.deleteNote(data)
      .subscribe(data => {
        if(data.body.status == 'Ok')
        {
          this.notes = this.notes.filter(n => n !== note);
          alert('Xoa thanh cong');
        }
      })
  }

}
