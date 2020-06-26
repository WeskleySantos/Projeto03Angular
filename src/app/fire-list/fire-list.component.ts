import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fire-list',
  templateUrl: './fire-list.component.html',
  styleUrls: ['./fire-list.component.css']
})
export class FireListComponent implements OnInit {

  listRef: AngularFireList<any>;
  list: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.listRef = db.list('Pastel');
    this.list = this.listRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  add(newText: string, newNumber: number) {
    this.listRef.push(
      {
        text: newText,
        number: newNumber
      }
    );
  }

  delete(key: string) {
    this.listRef.remove(key);
  }

  ngOnInit() {
  }

}
