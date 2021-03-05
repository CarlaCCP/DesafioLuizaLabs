import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {PostComponent} from './post/post.component';
import {GetComponent} from './get/get.component';
import {PutDeleteComponent} from './put-delete/put-delete.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'postar', component: PostComponent},
{path: 'todos', component: GetComponent},
{path: 'atualizar/:id', component: PutDeleteComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
