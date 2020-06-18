import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { NgxSoapModule } from 'ngx-soap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IframeComponent } from './xmpie/iframe/iframe.component';
import { EmbeddedComponent } from './xmpie/embedded/embedded.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmbeddedComponent,
    IframeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // NgxSoapModule
  ],
  // providers: [EmbeddedComponent, IframeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
