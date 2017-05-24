import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BuyComponentComponent } from './buy-component/buy-component.component';
import { SellComponentComponent } from './sell-component/sell-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyComponentComponent,
    SellComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([      
      {
        path: 'buy-calls',
        component: BuyComponentComponent
      },
      {
        path: 'sell-calls',
        component: SellComponentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
