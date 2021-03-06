import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CryptoTableComponent } from '../crypto-table/crypto-table.component';
import { CryptoService } from '../services/crypto.service';
import { NotFoundComponent } from '../not-found/not-found.component';

// const appRoutes: Routes = {
//   { path: '', component: CryptoTableComponent },
//   //{ path: 'bitcoinStats', component: BitcoinStatsComponent },
//   { path: '**', component: NotFoundComponent }
// };

@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
