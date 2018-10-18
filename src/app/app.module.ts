import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ImagenKilPage } from '../pages/imagen-kil/imagen-kil';
import { Imagen2Page } from '../pages/imagen2/imagen2';
import { Imagen3Page } from '../pages/imagen3/imagen3';
import { Imagen4Page } from '../pages/imagen4/imagen4';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImagenKilPage,
    Imagen2Page,
    Imagen3Page,
    Imagen4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ImagenKilPage,
    Imagen2Page,
    Imagen3Page,
    Imagen4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
