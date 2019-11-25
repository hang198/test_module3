import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookEditComponent} from './books/book-edit/book-edit.component';
import {BookAddComponent} from './books/book-add/book-add.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {NgxPaginationModule} from 'ngx-pagination';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookEditComponent,
    BookAddComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    NgxPaginationModule,
    BrowserModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
