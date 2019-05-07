import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component'; 
import { ItemListComponent } from './collection/item-list/item-list.component'; 

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path: 'home', component: HomeComponent }   
  {path: 'collection',component: CollectionComponent, 
          children: [     
            { path: '', redirectTo: '/home', pathMatch: 'full' },     
            { path: ':cat_id/furniture', component: ItemListComponent }
          ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
