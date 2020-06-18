import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IframeComponent } from './xmpie/iframe/iframe.component';
import { EmbeddedComponent } from './xmpie/embedded/embedded.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'xmpieIframe',
    component: IframeComponent
  },
  {
    path: 'xmpieEmbedded',
    component: EmbeddedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
