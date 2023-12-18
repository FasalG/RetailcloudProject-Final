import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableviewComponent } from './tableview/tableview.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    TableviewComponent,
    ListComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
