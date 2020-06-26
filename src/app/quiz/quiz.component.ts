import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    listRef: AngularFireList<any>;
    list: Observable<any[]>;

    nomesRef: AngularFireList<any>;
    nomes: Observable<any[]>;
  
    constructor(private db: AngularFireDatabase) {
      this.listRef = db.list('questions');
      this.list = this.listRef.snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
      this.nomesRef = db.list('nomes');
      this.nomes = this.nomesRef.snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
    }
  
      add(nm: string) {
      this.nomesRef.push(
        {
          nome: nm,
        }
      );
    }

  
  
    ngOnInit() {
    }

}
