import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

// Component
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

// Notebook component
import {NotebooksComponent} from './notebooks/notebooks/notebooks.component';
import {NotebookListComponent} from './notebooks/notebook-list/notebook-list.component';
import {NotebookEditorComponent} from './notebooks/notebook-editor/notebook-editor.component';

//Service
import {AuthserviceService as Auth} from './authservice.service';

const routes : Routes = [
  {path: '', redirectTo : '/login', pathMatch : 'full'},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},

  {path: 'notebook', component: NotebooksComponent, canActivate: [Auth], 
    children: [
      {path: '' , redirectTo: '/notebook/list', pathMatch: 'full'},
      {path : 'list', component :NotebookListComponent},
      {path : 'create', component : NotebookEditorComponent},
      {path : 'edit/:id', component: NotebookEditorComponent}
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    //CommonModule
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
