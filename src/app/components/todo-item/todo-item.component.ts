import { Component, OnInit } from '@angular/core';

import {  faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  faSquare = faSquare;
  faCheckSquare = faCheckSquare;
  
  constructor() { }

  ngOnInit(): void {
  }

}
