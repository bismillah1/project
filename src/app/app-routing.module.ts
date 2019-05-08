import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ItemListComponent } from './collection/item-list/item-list.component'; 
import { ItemDetailComponent } from './collection/item-detail/item-detail.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'collection',component: CollectionComponent, children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: ':cat_id/furniture', component: ItemListComponent },
    { path: ':cat_id/furniture/:it_id', component: ItemDetailComponent }   
  ]},
  {path: 'contactus' , component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
