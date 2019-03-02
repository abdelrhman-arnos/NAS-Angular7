import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderModule} from './shared/header/header.module';
import {SliderModule} from './home/slider/slider.module';
import {ServicesModule} from './home/services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SliderModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
