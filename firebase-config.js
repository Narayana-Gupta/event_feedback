
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";


const firebaseConfig = {
apiKey: "AIzaSyCje7mNp9y6TO6qBGm7iEQx2XNd2ZOrz9o",
authDomain: "feedback-system-7ec2f.firebaseapp.com",
databaseURL: "https://feedback-system-7ec2f-default-rtdb.firebaseio.com",
projectId: "feedback-system-7ec2f",
storageBucket: "feedback-system-7ec2f.appspot.com",
messagingSenderId: "766852655039",
appId: "1:766852655039:web:6a4c85015031303d6b630a",
measurementId: "G-CTCFTB2V7D"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth, ref, set, push, onValue, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
