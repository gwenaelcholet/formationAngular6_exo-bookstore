import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogRootComponent } from './catalog-root/catalog-root.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogBookComponent } from './catalog-book/catalog-book.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [CatalogRootComponent, CatalogListComponent, CatalogBookComponent]
})
export class CatalogModule { }
