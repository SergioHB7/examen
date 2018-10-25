import { AviciiPage } from './../pages/avicii/avicii';
import { GarrixPage } from './../pages/garrix/garrix';
import { ChainsPage } from './../pages/chains/chains';
import { AlessoPage } from './../pages/alesso/alesso';
import { KygoPage } from './../pages/kygo/kygo';
import { Tracks5Page } from './../pages/tracks5/tracks5';
import { Tracks4Page } from './../pages/tracks4/tracks4';
import { Tracks3Page } from './../pages/tracks3/tracks3';
import { Tracks2Page } from './../pages/tracks2/tracks2';
import { Tracks1Page } from './../pages/tracks1/tracks1';
import { Image5Page } from './../pages/image5/image5';
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
import { Reseña1Page } from '../pages/reseña1/reseña1';
import { Reseña2Page } from '../pages/reseña2/reseña2';
import { Reseña3Page } from '../pages/reseña3/reseña3';
import { Reseña4Page } from '../pages/reseña4/reseña4';
import { Reseña5Page } from '../pages/reseña5/reseña5';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImagenKilPage,
    Imagen2Page,
    Imagen3Page,
    Imagen4Page,
    Image5Page,
    Tracks1Page,
    Tracks2Page,
    Tracks3Page,
    Tracks4Page,
    Tracks5Page,
    KygoPage,
    AlessoPage,
    ChainsPage,
    GarrixPage,
    AviciiPage,
    Reseña1Page,
    Reseña2Page,
    Reseña3Page,
    Reseña4Page,
    Reseña5Page
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
    Imagen4Page,
    Image5Page,
    Tracks1Page,
    Tracks2Page,
    Tracks3Page,
    Tracks4Page,
    Tracks5Page,
    KygoPage,
    AlessoPage,
    ChainsPage,
    GarrixPage,
    AviciiPage,
    Reseña1Page,
    Reseña2Page,
    Reseña3Page,
    Reseña4Page,
    Reseña5Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
