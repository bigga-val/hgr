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
    var firebaseConfig = {
      apiKey: "AIzaSyBtTWUfqesk4i5HpQrodf0BOfMUrDzh938",
      authDomain: "mwangejidispensaire-aef96.firebaseapp.com",
      databaseURL: "https://mwangejidispensaire-aef96.firebaseio.com",
      projectId: "mwangejidispensaire-aef96",
      storageBucket: "mwangejidispensaire-aef96.appspot.com",
      messagingSenderId: "128258831317",
      appId: "1:128258831317:web:4ea7f9e3d181de1e71835c",
      measurementId: "G-C26KPKHVS2"
    };
    firebase.initializeApp(firebaseConfig);
  }

}

