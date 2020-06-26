import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitconBrlComponent } from './bitcon-brl/bitcon-brl.component';
import { ListComponent } from './list/list.component';
import { FireListComponent } from './fire-list/fire-list.component';
import { FireQuestionsComponent } from './fire-questions/fire-questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { RankingComponent } from './ranking/ranking.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'bitcoin', component: BitcoinComponent},
  {path: 'bitcoin-brl', component: BitconBrlComponent},
  {path: 'list', component: ListComponent},
  {path: 'fire-list', component: FireListComponent},
  {path: 'fire-questions', component: FireQuestionsComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'rank', component: RankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
