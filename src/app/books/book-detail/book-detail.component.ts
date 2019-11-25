import {Component, OnInit} from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../../services/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: IBook;
  private id: string;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById() {
    this.bookService.findById(this.id).subscribe((result: any) => {
      this.book = result;
    });
  }

}
