import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LinkComponent } from './link/link.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BusinessCardComponent } from './business-card/business-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    BannerComponent,
    ContactComponent,
    BusinessCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
