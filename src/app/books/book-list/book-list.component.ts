import {Component, OnInit} from '@angular/core';
import {IBook} from '../ibook';
import {BookService} from '../../services/book.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  p = 1;
  popoverTitle = 'Record Delete Confirmation';
  popoverMessage = 'Do you want to really delete?';
  cancelClicked = false;

  constructor(private bookService: BookService,
              private toastS: ToastrService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe((result: any) => {
      this.books = result;
    });
  }

  totalBook() {
    return this.books.length;
  }

  delete(id) {
    this.bookService.delete(id).subscribe((result: any) => {
      this.getAll();
      this.toastS.success('Delete successfull!');
    });
  }
}
