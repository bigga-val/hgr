import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { config } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hgr';
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyD4j-1poAjO8dRw5ZiFecHb42SXVI6x8Fc",
      authDomain: "mwangejidispensaire.firebaseapp.com",
      databaseURL: "https://mwangejidispensaire.firebaseio.com",
      projectId: "mwangejidispensaire",
      storageBucket: "mwangejidispensaire.appspot.com",
      messagingSenderId: "1010197745648",
      appId: "1:1010197745648:web:69cceb6edaadf80eef5735",
      measurementId: "G-0YNJ28TGW9"
    };
    firebase.initializeApp(firebaseConfig);
  }

}

