import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { GlobalErrorHandlerService } from './global-error-handler.service'
import { MyModuleModule} from 'src/app/my-module/my-module.module'
import { MyCompComponent } from './my-module/my-comp/my-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyModuleModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},

      {path: 'mycomp', component: MyCompComponent}
    ])
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandlerService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
