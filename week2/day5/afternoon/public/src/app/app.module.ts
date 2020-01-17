import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpService } from "./http.service";
import { ShowTaskComponent } from './show-task/show-task.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, ShowTaskComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
