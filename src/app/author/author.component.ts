import { AuthorHttpService } from '../services/author-http.service';
import { AuthorModel } from '../models/index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from '../services/message.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  
  author: AuthorModel = {};

  //array de autores

  authors: AuthorModel[] = [];

  constructor(private authorHttpService: AuthorHttpService,  private formBuilder: FormBuilder,  public messageService: MessageService ) { 
    
  }

  ngOnInit() {
    this.getAuthors();
    this.getAuthor();

  }

  getAuthors(): void {
    this.authorHttpService.getAll().subscribe(
      response => {
        this.authors = response.data
      },
      error => {
        console.log(error)
      }
    );
  }

  getAuthor(): void {
    const id = 1;
    this.authorHttpService.geteOne(id).subscribe(
      response => {
        this.author = response.data
      },
      error => {
        console.log(error)
      }
    );
  }

  createAuthor(): void{
    this.authorHttpService.create(this.author).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    );
  }

  updateAuthor(): void {
    this.authorHttpService.update(this.author.id, this.author).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    );
  }

  deleteAuthor(): void {
    this.authorHttpService.delete(this.author.id).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    );
  }

}
