import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CategoryService } from './shared/service/category.service';
import { FurnitureService } from './shared/service/furniture.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShortenPipe } from './shared/pipe/shorten.pipe';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ItemListComponent } from './collection/item-list/item-list.component';
import { ItemDetailComponent } from './collection/item-detail/item-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    HeaderComponent,
    HomeComponent,
    CollectionComponent,
    ContactUsComponent,
    ItemListComponent,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [CategoryService, FurnitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
