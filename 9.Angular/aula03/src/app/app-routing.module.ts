import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex01Component } from './ex01/ex01.component';
import { Ex02Component } from './ex02/ex02.component';
import { Ex03Component } from './ex03/ex03.component';
import { Ex04Component } from './ex04/ex04.component';


const routes: Routes = [
  { path: 'ex01', component: Ex01Component },
  { path: 'ex02', component: Ex02Component },
  { path: 'ex03', component: Ex03Component },
  { path: 'ex04', component: Ex04Component },
  { path: '', redirectTo: '/ex01', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
