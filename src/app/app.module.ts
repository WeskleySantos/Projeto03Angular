import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitconBrlComponent } from './bitcon-brl/bitcon-brl.component';
import { ListComponent } from './list/list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { FireListComponent } from './fire-list/fire-list.component';
import { FireQuestionsComponent } from './fire-questions/fire-questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BitcoinComponent,
    BitconBrlComponent,
    ListComponent,
    FireListComponent,
    FireQuestionsComponent,
    QuizComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
