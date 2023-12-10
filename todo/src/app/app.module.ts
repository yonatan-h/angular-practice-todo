import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskComponent } from './components/task/task.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskService } from './services/task.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
