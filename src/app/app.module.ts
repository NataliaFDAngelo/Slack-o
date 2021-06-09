import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMainComponent } from './components/create-main/create-main.component';
import { CreateFooterComponent } from './components/create-footer/create-footer.component';
import { ChannelPrincipalComponent } from './channel-principal/channel-principal.component';
import { UniquePipe } from './pipe/uniquepipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateMainComponent,
    CreateFooterComponent,
    ChannelPrincipalComponent,
    UniquePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
