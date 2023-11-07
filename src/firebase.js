import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBhtbteDZ70puqqQxAO2-b6Nh1gI0HI-WM",
    authDomain: "todoist-petlist.firebaseapp.com",
    databaseURL: "https://todoist-petlist-default-rtdb.firebaseio.com",
    projectId: "todoist-petlist",
    storageBucket: "todoist-petlist.appspot.com",
    messagingSenderId: "189121751509",
    appId: "1:189121751509:web:f57b4389f3181056a9f55c",
});

export { firebaseConfig as firebase };

