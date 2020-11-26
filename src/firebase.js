import firebase from 'firebase/app';
import "firebase/auth";

 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLz2Q8wY45HEzRC8dzQzZf5ur-ZrGcOeY",
    authDomain: "app-react-ecd59.firebaseapp.com",
    databaseURL: "https://app-react-ecd59.firebaseio.com",
    projectId: "app-react-ecd59",
    storageBucket: "app-react-ecd59.appspot.com",
    messagingSenderId: "223049176723",
    appId: "1:223049176723:web:d3729fdceb9db009265f66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const authentication = firebase.auth();

export {authentication};