import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EduycursosComponent } from './components/eduycursos/eduycursos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    EduycursosComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
