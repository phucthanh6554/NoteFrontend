import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotesService} from '../notes.service';
import {LoadingService} from '../../loading.service';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notebook_id : number;
  notes ;
  isEmpty : boolean
  constructor(private route : ActivatedRoute, 
    private noteservice : NotesService,
    private loadingservice : LoadingService,
    private userservice : UserService,
    private router : Router) { }

  ngOnInit(): void {
    this.notebook_id = +this.route.snapshot.paramMap.get('notebook_id');

    this.getNotes();

    this.loadingservice.setLoad(); // setLoader
  }

  getNotes()
  {
    this.noteservice.getNotes(this.notebook_id)
      .subscribe(data => {
        this.notes = data.body;
        console.log(data.body.length);
        this.isEmpty = data.body.length == 0 ? true : false;

        this.loadingservice.stopLoad();
      },
      err => {
        console.log(err);
        alert('Co loi xay ra');
        this.loadingservice.stopLoad();
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

  logout(): void{
    this.userservice.logout();
    this.router.navigate(['/login']);
  }

}
