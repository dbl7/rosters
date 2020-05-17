import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { AppMaterialModule } from '@core/material/app-material.module';
import { CoreModule } from '@core/core.module';
import { TrainingModule } from './training/training.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    CoreModule,
    BrowserAnimationsModule,
    TrainingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
