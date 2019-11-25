import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  addBookForm: FormGroup;

  constructor(private bookService: BookService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addBookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submit() {
    this.bookService.create(this.addBookForm.value).subscribe((result: any) => {
      this.router.navigate(['/']);
    });
  }

  get title() {
    return this.addBookForm.get('title');
  }

  get author() {
    return this.addBookForm.get('author');
  }

  get description() {
    return this.addBookForm.get('description');
  }
}
