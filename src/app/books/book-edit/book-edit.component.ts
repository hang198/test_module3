import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  editBookForm: FormGroup;
  private id: string;

  constructor(private bookService: BookService,
              private router: Router,
              private fb: FormBuilder,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.editBookForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.findById();
  }

  findById() {
    this.bookService.findById(this.id).subscribe((result: any) => {
      this.editBookForm.patchValue({
        title: result.title,
        author: result.author,
        description: result.description
      });
    });
  }

  submit() {
    this.bookService.edit(this.editBookForm.value, this.id).subscribe((result: any) => {
      this.router.navigate(['/']);
    });
  }
  get title() {
    return this.editBookForm.get('title');
  }
  get author() {
    return this.editBookForm.get('author');
  }
  get description() {
    return this.editBookForm.get('description');
  }
}
