import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDbGa-ISmKvpf3Vy-xslUPizYf15zlxfM",
  authDomain: "webshop-10-2021.firebaseapp.com",
  projectId: "webshop-10-2021",
  storageBucket: "webshop-10-2021.appspot.com",
  messagingSenderId: "435263906679",
  appId: "1:435263906679:web:f6ebe56cddfa26514db772",
  measurementId: "G-JY0CV3Q6PN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
