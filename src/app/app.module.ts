import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockApiServiceService } from './mock-api-service.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './services/home-page/home-page.component';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [AppComponent, LoginPageComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    InMemoryWebApiModule.forRoot(MockApiServiceService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
