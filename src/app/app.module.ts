import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.state/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { Dispatcher } from './app.dispatcher';
import { AppSelector } from './app.state/app.selectors';
import { loanService } from 'src/shared/services/loanService';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes, {
      preloadingStrategy: PreloadAllModules
    }),
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({    
    }),   
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule 
  ],
  providers: [
    Dispatcher,
    AppSelector,
    loanService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
