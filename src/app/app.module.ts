import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollectionComponent } from 'src/app/collection/collection.component';
import { ItemListComponent } from 'src/app/collection/item-list/item-list.component';
import { ItemDetailComponent } from 'src/app/collection/item-detail/item-detail.component';
import { ShortenPipe } from './shared/pipe/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ItemListComponent,
    ItemDetailComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
