import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CategoryService } from './shared/service/category.service';
import { FurnitureService } from './shared/service/furniture.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShortenPipe } from './shared/pipe/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [CategoryService, FurnitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
