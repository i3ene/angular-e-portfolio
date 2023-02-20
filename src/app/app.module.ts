import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AnimatedTextComponent } from './animated-text/animated-text.component';
import { AppComponent } from './app.component';
import { CacheService } from './cache.service';
import { LetterComponent } from './letter/letter.component';
import { SayComponent } from './say/say.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [AppComponent, TaskComponent, LetterComponent, AnimatedTextComponent, SayComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CacheService],
  bootstrap: [AppComponent],
})
export class AppModule {}
