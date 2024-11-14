import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RevealViewComponent, VisualizationViewerComponent } from 'reveal-sdk-wrappers-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RevealViewComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
