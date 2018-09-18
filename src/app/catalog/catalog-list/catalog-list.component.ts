import { Component, OnInit } from '@angular/core';
import {CatalogService} from '../../core/services/catalog.service';
import {Observable} from 'rxjs';
import {Book} from '../../core/model/book';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  booksList$: Observable<Book []>;

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.booksList$ = this.catalogService.getListBooks();
  }

}
