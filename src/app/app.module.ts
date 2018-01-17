import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Form} from '@angular/forms'
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
