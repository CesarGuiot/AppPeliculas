import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideShowPosterComponent } from './slide-show-poster/slide-show-poster.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  entryComponents:[
    DetalleComponent
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlideShowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  exports:[
    SlideShowPosterComponent,
    SlideshowBackdropComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
