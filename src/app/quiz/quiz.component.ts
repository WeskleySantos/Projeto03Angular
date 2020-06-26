import { Component, OnInit, Input } from '@angular/core';
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

    contador: number =0;
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

    correto(r: any, verdadeiro: any){
      console.log(r + " e " + verdadeiro)
      if (r == verdadeiro){
        this.contador++
      } else if (this.contador == 0){
        this.contador==0
      }else{
        this.contador--
      }
      console.log(this.contador)
    }

      add(nm: string, acerto: number) {
        if(nm == ""){

        }else{
      this.nomesRef.push(
        {
          nome: nm,
          acertos: acerto
        }
      );
    }    }

  
  
    ngOnInit() {
    }

}
