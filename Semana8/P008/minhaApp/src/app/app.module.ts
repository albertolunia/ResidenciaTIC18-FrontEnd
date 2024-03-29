import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { FormsModule } from '@angular/forms';
import { ArrumandoWikiPipe } from './wikipedia/arrumando-wiki.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaComponent,
    ArrumandoWikiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
