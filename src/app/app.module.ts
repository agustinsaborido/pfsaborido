import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { metaReducers, rootReducer } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer, {
      metaReducers: metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}








// import { NgModule, isDevMode } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { DashboardModule } from './layouts/dashboard/dashboard.module';
// import { HttpClientModule } from '@angular/common/http';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { EffectsModule } from '@ngrx/effects';
// // import { DashboardComponent } from './layouts/dashboard/dashboard.component';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, AppRoutingModule, DashboardModule, HttpClientModule, StoreModule.forRoot({}, {}), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), EffectsModule.forRoot([])],
//   providers: [provideAnimationsAsync()],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

