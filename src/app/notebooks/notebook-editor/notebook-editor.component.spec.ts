import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookEditorComponent } from './notebook-editor.component';

describe('NotebookEditorComponent', () => {
  let component: NotebookEditorComponent;
  let fixture: ComponentFixture<NotebookEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
