import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from '../books/ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.apiUrl + '/books');
  }

  create(data) {
    return this.http.post(this.apiUrl + '/books', data);
  }

  edit(book: IBook, id) {
    return this.http.put(this.apiUrl + '/books/' + id, book);
  }

  findById(id) {
    return this.http.get(this.apiUrl + '/books/' + id);
  }

  delete(id) {
    return this.http.delete(this.apiUrl + '/books/' + id);
  }
}
