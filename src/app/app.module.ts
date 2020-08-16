import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//http client
import { HttpClientModule } from "@angular/common/http";

//toast
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

// font awsome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
