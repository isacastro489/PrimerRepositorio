import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderindexComponent } from './headerindex/headerindex.component';
import { BodyindexComponent } from './bodyindex/bodyindex.component';
import { FooterindexComponent } from './footerindex/footerindex.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderindexComponent,
    BodyindexComponent,
    FooterindexComponent,   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
