import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { element } from 'protractor';
import { async } from '@angular/core/testing';

export interface Pessoa {
  nome: string;
  acertos: number;
}
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})


export class RankingComponent implements OnInit {

  listRef: AngularFireList<any>;
  list: Observable<any[]>;

   constructor(private db: AngularFireDatabase) {
      this.listRef = db.list('nomes');
      this.list = this.listRef.snapshotChanges().pipe(
        map(changes => 
          changes.map(
            c => ({ 
            key: c.payload.key, ...c.payload.val() }))
        )
           );

          }
  ngOnInit() {
  }


}
