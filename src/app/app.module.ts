import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import { NotebooksComponent } from './notebooks/notebooks/notebooks.component';
import { NotebookEditorComponent } from './notebooks/notebook-editor/notebook-editor.component';
import { NotebookListComponent } from './notebooks/notebook-list/notebook-list.component';
import { NotesComponent } from './notes/notes/notes.component';
import { NoteEditorComponent } from './notes/note-editor/note-editor.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { FlashmessageComponent } from './flashmessage/flashmessage.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotebooksComponent,
    NotebookEditorComponent,
    NotebookListComponent,
    NotesComponent,
    NoteEditorComponent,
    NoteListComponent,
    FlashmessageComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
