import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  val1: number;

  val2: number = 50;

  val3: number;

  val4: number;

  rangeValues: number[] = [20,80];

  display: boolean = false;

    showDialog() {
        this.display = true;
    }
  constructor() { }

  ngOnInit(): void {
  }

}
