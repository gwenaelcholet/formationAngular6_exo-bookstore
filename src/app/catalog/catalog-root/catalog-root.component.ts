import { Component, OnInit } from '@angular/core';
import {CatalogService} from '../../core/services/catalog.service';
import {Observable} from 'rxjs';
import {Book} from '../../core/model/book';

@Component({
  selector: 'app-catalog-root',
  templateUrl: './catalog-root.component.html',
  styleUrls: ['./catalog-root.component.css']
})
export class CatalogRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
