import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fire-questions',
  templateUrl: './fire-questions.component.html',
  styleUrls: ['./fire-questions.component.css']
})
export class FireQuestionsComponent implements OnInit {

  listRef: AngularFireList<any>;
  list: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.listRef = db.list('questions');
    this.list = this.listRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  add(q: string, a: string, a1: string, a2: string, a3: string) {
    this.listRef.push(
      {
        question: q,
        answer: a,
        alternative1: a1,
        alternative2: a2,
        alternative3: a3
      }
    );
  }

  delete(key: string) {
    this.listRef.remove(key);
  }

  ngOnInit() {
  }

}
