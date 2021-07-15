import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecisionTreeComponent } from './decision-tree.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    DecisionTreeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class DecisionTreeModule { }
