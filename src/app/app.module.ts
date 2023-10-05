import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { articReducer } from './stores/artic/artic.reducer';
import { ControlsComponent } from './components/controls/controls.component';
import { DataViewModule } from 'primeng/dataview';
import { ChipModule } from 'primeng/chip';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ArticEffects } from './stores/artic/artic.effects';
import { ImagePlaceholderDirective } from './image-placeholder.directive';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { InputTextModule } from 'primeng/inputtext';
import { HttpCacheInterceptor } from './shared/http-cache.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ShuffledComponent } from './pages/shuffled/shuffled.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    ControlsComponent,
    ImagePlaceholderDirective,
    SearchBarComponent,
    ShuffledComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireModule,
    AngularFireModule,
    AppRoutingModule,
    FontAwesomeModule,
    ButtonModule,
    TableModule,
    PasswordModule,
    FormsModule,
    BrowserModule,
    DividerModule,
    InputTextModule,
    DataViewModule,
    PaginatorModule,
    ChipModule,
    CardModule,
    HttpClientModule,
    ToolbarModule,
    StoreModule.forRoot({ artic: articReducer }),
    EffectsModule.forRoot([ArticEffects])
  ],
  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCacheInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
