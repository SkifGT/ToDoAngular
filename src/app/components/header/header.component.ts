import { Component, OnInit } from '@angular/core';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faListAlt = faListAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
