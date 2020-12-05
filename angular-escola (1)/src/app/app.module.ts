import { DisciplinasService } from './disciplinas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeDisciplinasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DisciplinasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
