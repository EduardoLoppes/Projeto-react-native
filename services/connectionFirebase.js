//biblioteca do firebase
import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//trabalha com o banco de dados criado no firebase
import 'firebase/compat/database';

let firebaseConfig = {
    apiKey: "AIzaSyAi__pKbwkOiRWxdvTO2fn3XJd1oEgBLcg",
    authDomain: "dblojaslimeshoppe.firebaseapp.com",
    databaseURL: "https://dblojaslimeshoppe-default-rtdb.firebaseio.com",
    projectId: "dblojaslimeshoppe",
    storageBucket: "dblojaslimeshoppe.appspot.com",
    messagingSenderId: "718373437559",
    appId: "1:718373437559:web:b30ea7cd9d3f96b3954672"
  };

if (!firebase.apps.length) {
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    }

export default firebase;


